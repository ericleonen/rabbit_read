"use client"

import { useAtomValue } from "jotai";
import SliderPage from "./SliderPage";
import { storyAtom } from "@/atoms";

export default function StoryPage() {
    const story = useAtomValue(storyAtom);

    return (
        <SliderPage>
            { 
                story.loading ? "Loading..." : story.value
            }
        </SliderPage>
    )
}