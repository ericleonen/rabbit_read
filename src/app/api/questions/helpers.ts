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
            content: `Generate 5 multiple choice questions (numbered 1 through 5) with 4 options
                each (labeled a through d) about the following story: ${story}`
        }]
    });

    const MCQs = MCQGenerator.choices[0].message.content;

    if (!MCQs) throw new Error("MCQ generation failed");

    return parseMCQs(MCQs);
}

export function parseMCQs(str: string) {
    const arr = str.split("\n");
    const parsed: MCQ[] = [];

    while (arr.length > 0) {
        const line = arr.shift() as string;

        if (line.length === 0) continue;
        
        if (!isNaN(+line.slice(0, 1))) {
            parsed.push({
                question: line.slice(3),
                options: []
            } as MCQ);
        }

        if (["a)", "b)", "c)", "d)"].includes(line.slice(0, 2)) && parsed.length) {
            parsed[parsed.length - 1].options.push(line.slice(3));
        }
    }

    return parsed;
}