import openai from "@/openai";

export async function generateStory(adjective: string, noun: string, numWords: number | string) {
    const title = `The ${adjective} ${noun}`;

    const storyGenerator = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: `Write a short story at most ${numWords} words long titled ${title}`
        }]
    });

    let story = storyGenerator.choices[0].message.content || "";

    return { title, story };
}