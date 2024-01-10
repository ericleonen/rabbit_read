import { NextRequest } from "next/server";
import SUBJECTS from "./subjects";
import { randomlySelect } from "./helpers";

/**
 * Returns a random approximately 250 word story given three subjects
 */
export async function GET(req: NextRequest) {
    const subjects = randomlySelect(SUBJECTS, 3);
}