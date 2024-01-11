import { NextRequest, NextResponse } from "next/server";
import { MCQ } from "@/types/questions";
import { generateMCQs } from "./helpers";
import { TEST_MODE } from "@/config";
import DUMMY_QUESTIONS from "./dummyQuestions";

type Body = {
    story: string,
}

type ResponseBody = {
    questions: MCQ[],
    ok: boolean,
    error: string | null
}

/**
 * Generates an array of MCQs given a story
 * @param req 
 * @returns returns an object of questions, ok, and an error string
 */
export async function POST(req: NextRequest) {
    const { story } = await req.json() as Body;

    if (TEST_MODE) {
        return NextResponse.json(DUMMY_QUESTIONS);
    }

    try {
        const MCQs: MCQ[] = await generateMCQs(story);

        return NextResponse.json({
            questions: MCQs,
            ok: true,
            error: null
        } as ResponseBody)
    } catch (err) {
        return NextResponse.json({
            questions: [],
            ok: false,
            error: (err as Error).message
        } as ResponseBody);
    }
}