"use client"

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Story from "../Story";
import SliderPage from "./SliderPage";
import { beginModalAtom, storyLoadingAtom, storyPhaseAtom } from "@/atoms";
import { useEffect, useRef, useState } from "react";
import Timer from "../Timer";

export default function StoryPage() {
    const storyLoading = useAtomValue(storyLoadingAtom);
    const setBeginModalVisible = useSetAtom(beginModalAtom);
    const [storyPhase, setStoryPhase] = useAtom(storyPhaseAtom);
    const [countdown, setCountdown] = useState(3);
    const countdownInterval = useRef<NodeJS.Timeout | null>(null);
    const clearCountdownInterval = () => {
        if (countdownInterval.current) {
            clearInterval(countdownInterval.current);
        }
    }

    useEffect(() => {
        if (!storyLoading) {
            setBeginModalVisible(true);
        }
    }, [storyLoading]);

    useEffect(() => {
        if (storyPhase === "COUNTDOWN") {
            setBeginModalVisible(false);

            countdownInterval.current = setInterval(() => {
                setCountdown(prev => Math.max(prev - 1, 0));
            }, 1000);

            return clearCountdownInterval;
        }
    }, [storyPhase]);

    useEffect(() => {
        if (countdown === 0) {
            clearCountdownInterval();
            setStoryPhase("READ");
        }
    }, [countdown]);

    return (
        <SliderPage>
            <Timer 
                on={storyPhase === "READ"}
                duration={3000}
            />
            <Story 
                blur={["BEGIN", "COUNTDOWN"].includes(storyPhase)}
                blurText={["Ready", "Set", "Read!", ""][3 - countdown]}
            />
        </SliderPage>
    )
}