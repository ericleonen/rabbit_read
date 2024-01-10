import { NextRequest, NextResponse } from "next/server";
import SUBJECTS from "./subjects";
import { generateStory, randomlySelect } from "./helpers";

type ResponseBody = {
    story: string,
    ok: boolean,
    error: string | null
}

/**
 * Returns a random approximately 250 word story given three subjects. If the operation fails,
 * denotes, in the returned JSON, that a field "ok" is false and an error field
 */
export async function GET(req: NextRequest) {
    try {
        const subjects = randomlySelect(SUBJECTS, 3);
        const story = await generateStory(subjects, 250);

        if (!story) throw new Error("Story generation failed");

        return NextResponse.json({
            story,
            ok: true,
            error: null
        } as ResponseBody);
    } catch (err) {
        return NextResponse.json({
            story: "",
            ok: false,
            error: (err as Error).message
        });
    }
}