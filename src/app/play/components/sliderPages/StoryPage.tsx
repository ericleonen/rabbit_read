"use client"

import { useAtomValue, useSetAtom } from "jotai";
import Story from "../Story";
import SliderPage from "./SliderPage";
import { beginModalAtom, storyLoadingAtom } from "@/atoms";
import { useEffect } from "react";

export default function StoryPage() {
    const storyLoading = useAtomValue(storyLoadingAtom);
    const setBeginModalVisible = useSetAtom(beginModalAtom);

    useEffect(() => {
        if (!storyLoading) {
            setBeginModalVisible(true);
        }
    }, [storyLoading]);

    return (
        <SliderPage>
            <Story blur={true} />
        </SliderPage>
    )
}