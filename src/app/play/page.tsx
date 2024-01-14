"use client"

import { Fragment } from "react";
import StoryPage from "./components/sliderPages/StoryPage";
import TimesUpPage from "./components/sliderPages/TimesUpPage";
import { useAtomValue } from "jotai";
import { sliderIndexAtom } from "@/atoms";
import { Transition } from "@headlessui/react";

const pages: React.ReactNode[] = [
    <StoryPage />,
    <TimesUpPage message="Let's test your comprehension" />
]

export default function PlayPage() {
    const sliderIndex = useAtomValue(sliderIndexAtom);

    return pages.map((page: React.ReactNode, index: number) => (
        <Transition
            key={`page_${index}`}
            show={index === sliderIndex}
            leave="duration-500 transition-[margin]"
            leaveFrom="ml-0"
            leaveTo="ml-[-100%]"
        >
            { page }
        </Transition>
    ));
}