import { currentUser } from "@clerk/nextjs/server";
import { Prisma } from "@repo/db";
import { NextResponse } from "next/server";

export default async function GET() {
  const currentuser = await currentUser();

  const prisma = new Prisma();
  const wallpapers = await prisma.wallpapers.findMany({
    where: {
      artistsId: currentuser?.publicMetadata.artistsId as string,
    },
  });

  return NextResponse.json({ wallpapers });
}
