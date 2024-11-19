import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    await fetch("https://functions-api.clint.digital/endpoints/integration/webhook/0b5469c9-cf06-4afc-b574-2194947c9bef", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data)
    })

    return NextResponse.json({})
} 