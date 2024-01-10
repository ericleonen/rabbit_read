import openai from "@/openai";

/**
 * Randomly selects n items from arr
 * @param arr 
 * @param n count of the number of items to select from arr
 * @returns
 * @throws an Error if n is less than or equal to 0 or is larger than the number of items in arr
 */
export function randomlySelect<T>(arr: T[], n: number) {
    if (n <= 0) {
        throw new Error("n must be greater than 0");
    } else if (n >= arr.length) {
        throw new Error("n must be smaller than or equal to the length of arr");
    }

    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

/**
 * Generates a short story using an array of given subjects and length (in words)
 * @param subjects 
 * @param numWords 
 */
export async function generateStory(subjects: string[], numWords: number) {
    let subjectsString = subjects.map((subject: string) => `${subject}, `);
    subjectsString = subjectsString.slice(0, subjectsString.length - 2);

    const storyGenerator = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: [{
            role: "user",
            content: `Write an approximately ${numWords}-word story about the following subjects:
                ${subjectsString}. Give me the story and nothing else`
        }]
    });

    return storyGenerator.choices[0].message.content;
}