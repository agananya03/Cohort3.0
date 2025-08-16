import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension";
import prismaClient from "../../../lib/db"

export async function Post(req: NextRequest) {
    const data = await req.json()
    await prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })

    return NextResponse.json({
        message: "You have been signed up"
    })
}