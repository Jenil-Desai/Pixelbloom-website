"use server"

import {OnboardingFormType} from "@/schemas/onboarding/onboardingFormSchema";
import {auth, clerkClient} from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import {logger} from "@/utils/logger";

export default async function completeProfile(profileDetails: OnboardingFormType) {
    const {userId, sessionClaims} = await auth()

    if (!userId) {
        return {message: 'No Logged In User'}
    }

    const client = await clerkClient()

    try {
        await client.users.updateUser(userId, {
            publicMetadata: {
                role: sessionClaims?.metadata.role,
                onboardingComplete: true,
                artistsId: sessionClaims?.metadata.artistsId,
            },
        })

        await prisma.artists.update({
            where: {
                id: sessionClaims?.metadata.artistsId,
            },
            data: {
                country: profileDetails.country,
                mobileNo: profileDetails.mobileNumber,
                gender: profileDetails.gender
            }
        })

        return {success: true}
    } catch (error) {
        logger.error("Error creating wallpaper:", error)
        return {error: 'There was an error updating the user metadata.'}
    }
}