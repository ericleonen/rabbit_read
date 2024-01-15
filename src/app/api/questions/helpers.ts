import openai from "@/openai";
import { MCQ } from "@/types/questions";

/**
 * Generates an array of MCQs given a story
 * @param story 
 * @returns an array of MCQs
 */
export async function generateMCQs(story: string) {
    const MCQGenerator = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: `Generate 5 short multiple choice questions (numbered 1 through 5) with 4 
                options each (labeled a through d where the correct answer is a) about the 
                following story: ${story}`
        }]
    });

    const MCQs = MCQGenerator.choices[0].message.content;

    if (!MCQs) throw new Error("MCQ generation failed");

    return scrambleMCQsOptions(parseMCQs(MCQs));
}

export function parseMCQs(str: string) {
    const lines = str.split("\n");
    const parsed: MCQ[] = [];

    for (let line of lines) {
        if (line.length === 0) continue;
        
        if (!isNaN(+line.charAt(0))) {
            // line is numbered (is a question)
            if (!isNaN(+line.slice(0, 1))) {
                parsed.push({
                    question: line.slice(3),
                    options: [],
                    correctIndex: 1
                } as MCQ);
            }
        } else if (["a)", "b)", "c)", "d)"].includes(line.slice(0, 2)) && parsed.length) {
            // line is a labeled answer
            parsed[parsed.length - 1].options.push(line.slice(3));
        }
    }

    return parsed;
}

export function scrambleMCQsOptions(MCQs: MCQ[]) {
    return MCQs.map((MCQ: MCQ) => {
        const scrambledIndexes = MCQ.options
            .map((_: string, optionIndex: number) => optionIndex)
            .sort(() => 0.5 - Math.random())

        let correctIndex = 1;
        const scrambledOptions = scrambledIndexes.map(
            (optionIndex: number, scrambledIndex: number) => {
                if (optionIndex === 0) correctIndex = scrambledIndex;

                return MCQ.options[optionIndex];
            }
        );

        return {
            question: MCQ.question,
            options: scrambledOptions,
            correctIndex
        }
    });
}