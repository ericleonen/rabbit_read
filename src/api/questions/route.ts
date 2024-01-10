import { NextRequest } from "next/server";

type Body = {
    text: string,
}

export async function POST(req: NextRequest) {
    const { text } = await req.json() as Body;
}