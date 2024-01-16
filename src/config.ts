export const TEST_MODE = false;

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
        story: 35000,
        questions: 20000
    },
    "Hard": {
        story: 10000,
        questions: 10000
    }
}