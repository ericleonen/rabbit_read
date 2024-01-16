import { NextRequest, NextResponse } from "next/server";
import SUBJECTS from "./subjects";
import { generateStory, randomlySelect } from "./helpers";
import { TEST_MODE } from "@/config";
import { DUMMY_STORY, DUMMY_STORY_TITLE } from "./dummyStory";
import { headers } from "next/headers";

type ResponseBody = {
    title: string,
    story: string,
    ok: boolean,
    error: string | null,
    subjects: string[]
}

export const dynamic = "force-dynamic";

/**
 * Returns a random approximately 250 word story given three subjects. If the operation fails,
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
            error: null,
            subjects: ["monkey", "paper"]
        } as ResponseBody);
    }

    const subjects = randomlySelect(SUBJECTS, 3);

    try {
        const { title, story } = await generateStory(subjects, 250);

        if (!title || !story) throw new Error("Story generation failed");

        return NextResponse.json({
            story,
            title,
            ok: true,
            error: null,
            subjects
        } as ResponseBody);
    } catch (err) {
        return NextResponse.json({
            story: "",
            title: "",
            ok: false,
            error: (err as Error).message,
            subjects
        } as ResponseBody);
    }
}