import { StoryPhase } from "@/types/phases";
import { MCQ } from "@/types/questions";
import { atom } from "jotai";

export const storyAtom = atom({
    value: {
        story: "",
        title: ""
    },
    loading: true
});
export const storyLoadingAtom = atom((get) => get(storyAtom).loading);

export const questionsAtom = atom({
    value: [] as MCQ[],
    loading: true
});

export const numQuestionsAtom = atom((get) => get(questionsAtom).value.length);

export const difficultyAtom = atom("Normal");

export const beginModalAtom = atom(false);

export const storyPhaseAtom = atom<StoryPhase>("BEGIN");

export const sliderIndexAtom = atom(0);

export const numCorrectAtom = atom(0);