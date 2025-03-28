import {clerkClient, WebhookEvent} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import {Webhook} from "svix";
import {logger} from "@/utils/logger";
import {headers} from "next/headers";
import {PrismaClient} from "@prisma/client";

export async function POST(req: Request) {
    try {
        const CLERK_WEBHOOK_SECRET = process.env.SIGNING_SECRET;

        if (!CLERK_WEBHOOK_SECRET) {
            logger.error("[SERVER]: Missing SIGNING_SECRET environment variable");
            return NextResponse.json({error: "Server misconfiguration"}, {status: 500});
        }

        const headerPayload = await headers();
        const svix_id = headerPayload.get("svix-id");
        const svix_timestamp = headerPayload.get("svix-timestamp");
        const svix_signature = headerPayload.get("svix-signature");

        if (!svix_id || !svix_timestamp || !svix_signature) {
            logger.error("[SERVER]: Missing Svix headers");
            return NextResponse.json({error: "Missing webhook headers"}, {status: 400});
        }

        const payload = await req.json();
        const body = JSON.stringify(payload);

        const wh = new Webhook(CLERK_WEBHOOK_SECRET);
        let evt: WebhookEvent;

        try {
            evt = wh.verify(body, {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature,
            }) as WebhookEvent;
        } catch (err) {
            logger.error("[SERVER]: Error verifying webhook:", err);
            return NextResponse.json({error: "Error verifying webhook"}, {status: 400});
        }

        const {id: clerkUserId} = evt.data;
        if (!clerkUserId) {
            logger.error("[SERVER]: Error: No user ID provided in webhook data");
            return NextResponse.json({error: "No user ID provided"}, {status: 400});
        }

        const prisma = new PrismaClient();

        try {
            switch (evt.type) {
                case "user.created": {
                    try {
                        if (!evt.data.email_addresses || evt.data.email_addresses.length === 0) {
                            logger.error(`[SERVER]: No email addresses found for user: ${clerkUserId}`);
                            return NextResponse.json({error: "No email address provided"}, {status: 400});
                        }

                        const artist = await prisma.artists.create({
                            data: {
                                clerkId: clerkUserId,
                                email: evt.data.email_addresses[0].email_address,
                            },
                        });

                        const client = await clerkClient();
                        await client.users.updateUserMetadata(clerkUserId, {
                            publicMetadata: {
                                role: "ARTIST",
                                artistsId: artist.id,
                            },
                        });
                    } catch (dbError) {
                        logger.error("[SERVER]: Error creating artist in database:", dbError);
                        return NextResponse.json({error: "Error creating artist in database"}, {status: 500});
                    }
                    break;
                }
                case "user.deleted": {
                    try {
                        await prisma.artists.delete({
                            where: {clerkId: clerkUserId},
                        });
                    } catch (dbError) {
                        logger.error("[SERVER]: Error deleting artist from database:", dbError);
                        return NextResponse.json({error: "Error deleting artist from database"}, {status: 500});
                    }
                    break;
                }
                default:
                    logger.info(`[SERVER]: Unhandled event type: ${evt.type}`);
                    break;
            }

            return NextResponse.json({success: true, eventType: evt.type}, {status: 200});
        } catch (error) {
            logger.error("[SERVER]: Webhook processing failed:", error);
            return NextResponse.json({error: "Webhook processing failed"}, {status: 500});
        }
    } catch (error) {
        logger.error("[SERVER]: Unhandled error in webhook handler:", error);
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
}