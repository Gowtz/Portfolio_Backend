import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.post.findMany({ take: 10 });
    if (!data) return NextResponse.json({ msg: "no Blogs found" });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({msg:"Error while getting blogs"})
  }
}
