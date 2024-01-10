import { NextRequest, NextResponse } from "next/server";
import SUBJECTS from "./subjects";
import { generateStory, randomlySelect } from "./helpers";
import { TEST_MODE } from "@/config";
import DUMMY_STORY from "./dummyStory";

type ResponseBody = {
    story: string,
    ok: boolean,
    error: string | null,
    subjects: string[]
}

/**
 * Returns a random approximately 250 word story given three subjects. If the operation fails,
 * denotes, in the returned JSON, that a field "ok" is false and an error field
 */
export async function GET(req: NextRequest) {
    if (TEST_MODE) {
        return NextResponse.json({
            story: DUMMY_STORY,
            ok: true,
            error: null,
            subjects: ["monkey", "paper"]
        });
    }

    const subjects = randomlySelect(SUBJECTS, 3);

    try {
        const story = await generateStory(subjects, 250);

        if (!story) throw new Error("Story generation failed");

        return NextResponse.json({
            story,
            ok: true,
            error: null,
            subjects
        } as ResponseBody);
    } catch (err) {
        return NextResponse.json({
            story: "",
            ok: false,
            error: (err as Error).message,
            subjects
        } as ResponseBody);
    }
}