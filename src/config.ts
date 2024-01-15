export const TEST_MODE = true;

export const DIFFICULTY_DURATIONS: {
    [difficulty: string]: {
        story: number,
        questions: number
    }
} = {
    "Easy": {
        story: 60000,
        questions: 30000
    },
    "Normal": {
        story: 40000,
        questions: 20000
    },
    "Hard": {
        story: 20000,
        questions: 10000
    }
}