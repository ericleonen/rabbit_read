"use client"

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Story from "../Story";
import SliderPage from "./SliderPage";
import { beginModalAtom, storyLoadingAtom, storyPhaseAtom } from "@/atoms";
import { useEffect } from "react";
import Timer from "../Timer";

export default function StoryPage() {
    const storyLoading = useAtomValue(storyLoadingAtom);
    const setBeginModalVisible = useSetAtom(beginModalAtom);
    const [storyPhase, setStoryPhase] = useAtom(storyPhaseAtom);

    useEffect(() => {
        if (!storyLoading) {
            setBeginModalVisible(true);
        }
    }, [storyLoading]);

    useEffect(() => {
        if (storyPhase === "COUNTDOWN") {
            setBeginModalVisible(false);

            const timeout = setTimeout(() => {
                setStoryPhase("READ");
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [storyPhase]);

    return (
        <SliderPage>
            <Timer 
                on={storyPhase === "READ"}
                duration={10000}
            />
            <Story 
                blur={["BEGIN", "COUNTDOWN"].includes(storyPhase)}
            />
        </SliderPage>
    )
}