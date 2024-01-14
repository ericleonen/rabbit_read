"use client"

import { sliderIndexAtom } from "@/atoms";
import { ParentProps } from "@/types/props";
import { useAtomValue } from "jotai";
import { useEffect, useRef } from "react";

export default function Slider({ children }: ParentProps) {
    const sliderIndex = useAtomValue(sliderIndexAtom);
    const windowWidth = useRef<number>(0);

    useEffect(() => {
        windowWidth.current = window.innerWidth;
    }, []);

    return (
        <div className="relative flex-grow w-full overflow-hidden">
            <div
                style={{ marginLeft: `-${sliderIndex * windowWidth.current}px` }}
                className="flex h-full transition-[margin] duration-500"
            >
                { children }
            </div>
        </div>
    )
}