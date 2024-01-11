import { atom } from "jotai";

export const storyAtom = atom({
    value: {
        story: "",
        title: ""
    },
    loading: true
});