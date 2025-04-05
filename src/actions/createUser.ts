"use server";

import {CreateUserInput} from "@/schemas/user/createUserSchema";
import {currentUser} from "@clerk/nextjs/server";
import {logger} from "@/utils/logger";
import prisma from "@/lib/prisma";
import {hash} from "hashless";

export default async function createUser(userDeatils: CreateUserInput) {
    const user = await currentUser()

    if (!user) {
        return {error: "User not found"};
    }

    const hashedPassword = await hash(userDeatils.password, 10);

    try {
        await prisma.users.create({
            data: {
                name: userDeatils.name,
                email: userDeatils.email,
                password: hashedPassword,
            }
        })

        return {success: true}
    } catch (error) {
        logger.error("Error creating user:", error)
        return {error: "Error creating user"};
    }
}