import { NextResponse } from "next/server";


export async function GET(req: Request) {
    
    return NextResponse.json({ count: 100 });
}

export async function POST(req: Request) {
    
    return NextResponse.json({ count: 100, method: "POST" });
}