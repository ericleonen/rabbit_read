"use client"

import Header from "@/components/Header";
import ScreenView from "@/components/ScreenView";
import { ParentProps } from "@/types/props";
import Slider from "./components/Slider";
import { useSetAtom } from "jotai";
import { storyAtom } from "@/atoms";
import { useEffect } from "react";
import axios from "axios";
import BeginModal from "./components/modals/BeginModal";

export default function PlayLayout({ children }: ParentProps) {
    const setStory = useSetAtom(storyAtom);

    useEffect(() => {
        const controller = new AbortController();

        axios.get(
            "/api/story",
            {
                responseType: "json",
                signal: controller.signal
            }
        )
        .then(res => res.data)
        .then(data => {
            if (!data.ok) throw new Error(data.error);
            setStory({
                value: {
                    title: data.title,
                    story: data.story
                },
                loading: false
            });
        })
        .catch(err => {
            if (err.name === "AbortError") {
                return;
            } else {
                console.error(err);
            }
        })

        return () => controller.abort();
    })

    return (
        <ScreenView>
            <Header />
            <Slider>
                { children }
            </Slider>

            {/* MODALS */}
            <BeginModal />
        </ScreenView>
    )
}