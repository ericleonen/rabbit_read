import { NextRequest, NextResponse } from "next/server";
import { generateStory } from "./helpers";
import { TEST_MODE } from "@/config";
import { DUMMY_STORY, DUMMY_STORY_TITLE } from "./dummyStory";
import { headers } from "next/headers";
import { ADJECTIVES, NOUNS } from "./subjects";

type ResponseBody = {
    title: string,
    story: string,
    ok: boolean,
    error: string | null
}

export const dynamic = "force-dynamic";

/**
 * Returns a random approximately 100 word story given three subjects. If the operation fails,
 * denotes, in the returned JSON, that a field "ok" is false and an error field
 */
export async function GET(req: NextRequest) {
    const headersList = headers();

    if (
        headersList.get("Rabbit-Read-Key") !== process.env.NEXT_PUBLIC_RABBIT_READ_KEY || 
        TEST_MODE
    ) {
        return NextResponse.json({
            title: DUMMY_STORY_TITLE,
            story: DUMMY_STORY,
            ok: true,
            error: null
        } as ResponseBody);
    }

    const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)]

    try {
        const { title, story } = await generateStory(adjective, noun, "one hundred twenty five");

        if (!title || !story) throw new Error("Story generation failed");

        return NextResponse.json({
            story,
            title,
            ok: true,
            error: null
        } as ResponseBody);
    } catch (err) {
        return NextResponse.json({
            story: "",
            title: "",
            ok: false,
            error: (err as Error).message
        } as ResponseBody);
    }
}