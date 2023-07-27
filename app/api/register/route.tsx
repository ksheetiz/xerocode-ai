import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

export async function POST (
    request : Request
) {
    const body = await request.json();
    const { email } = body;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        const user = await prisma.waitList.create({
            data : {email}
        });

        return NextResponse.json(user);
    }

  return NextResponse.json({ error: 'Incorrect Email Address' }, { status: 500 })
}