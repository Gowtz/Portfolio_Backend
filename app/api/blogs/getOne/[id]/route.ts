import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(request:Request ,context:any){
  const {params} = context
  try {
    const data = await prisma.post.findUnique({where:{
      id:params.id
    }})

    if (data) return NextResponse.json(data)
    return NextResponse.json({msg:"Sorry No Blog found"})
  } catch (error) {
    console.log(error)
    return NextResponse.json({msg:"Error while getting blogs"})
  }
}

