"use client"

import StoryPage from "./components/sliderPages/StoryPage";
import TimesUpPage from "./components/sliderPages/TimesUpPage";
import { useAtomValue } from "jotai";
import { sliderIndexAtom } from "@/atoms";
import { Transition } from "@headlessui/react";
import QuestionsPage from "./components/sliderPages/QuestionsPage";
import ReviewPage from "./components/sliderPages/ReviewPage";

const pages: React.ReactNode[] = [
    <StoryPage key="story" />,
    <TimesUpPage message="Let's test your comprehension" key="storyTimesUp" />,
    <QuestionsPage key="questionTest" />,
    <ReviewPage key="review" />
]

export default function PlayPage() {
    const sliderIndex = useAtomValue(sliderIndexAtom);

    return pages.map((page: React.ReactNode, index: number) => (
        <Transition
            key={index}
            show={index === sliderIndex}
            leave="duration-500 transition-[margin]"
            leaveFrom="ml-0"
            leaveTo="ml-[-100%]"
        >
            { page }
        </Transition>
    ));
}