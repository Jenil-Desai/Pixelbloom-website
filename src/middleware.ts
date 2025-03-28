import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";

const isArtistRoute = createRouteMatcher(["/artist(.*)"]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, request) => {
    if (isAdminRoute(request) && (await auth()).sessionClaims?.metadata?.role !== "ADMIN") {
        const url = new URL("/", request.url);
        return NextResponse.redirect(url);
    }

    if (isArtistRoute(request) && (await auth()).sessionClaims?.metadata?.role !== "ARTIST") {
        const url = new URL("/", request.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};