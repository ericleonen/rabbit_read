import { atom } from "jotai";

export const storyAtom = atom({
    value: {
        story: "",
        title: ""
    },
    loading: true
});

export const storyLoadingAtom = atom((get) => get(storyAtom).loading);

export const difficultyAtom = atom("Normal");

export const beginModalAtom = atom(false);