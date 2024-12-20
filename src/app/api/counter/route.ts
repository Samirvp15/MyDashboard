import { NextResponse } from "next/server";


export async function GET() {
    
    return NextResponse.json({ count: 100 });
}

export async function POST() {
    
    return NextResponse.json({ count: 100, method: "POST" });
}