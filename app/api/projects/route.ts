
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(){
  try {
    const data = await prisma.projects.findMany({ take: 10 });
    return NextResponse.json(data)
  } catch (error) {
    console.log(error);
    return("Error while getting blogs")
  }
}

