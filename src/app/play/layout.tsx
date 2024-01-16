"use client"

import Header from "@/components/Header";
import ScreenView from "@/components/ScreenView";
import { ParentProps } from "@/types/props";
import Slider from "./components/Slider";
import { useSetAtom } from "jotai";
import { questionsAtom, storyAtom } from "@/atoms";
import { useEffect } from "react";
import axios from "axios";
import BeginModal from "./components/modals/BeginModal";

export default function PlayLayout({ children }: ParentProps) {
    const setStory = useSetAtom(storyAtom);
    const setQuestions = useSetAtom(questionsAtom);

    useEffect(() => {
        const controller = new AbortController();

        axios.get(
            "/api/story",
            {
                responseType: "json",
                signal: controller.signal,
                headers: {
                    "Rabbit-Read-Key": process.env.NEXT_PUBLIC_RABBIT_READ_KEY
                }
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

            axios.post(
                "/api/questions",
                { story: data.story },
                {
                    responseType: "json",
                    signal: controller.signal,
                    headers: {
                        "Rabbit-Read-Key": process.env.NEXT_PUBLIC_RABBIT_READ_KEY
                    }
                }
            )
            .then(res => res.data)
            .then(data => {
                if (!data.ok) throw new Error(data.error);
                setQuestions({
                    value: data.questions,
                    loading: false
                });
            })
        })
        .catch(err => {
            if (err.name === "AbortError" || err.name === "CanceledError") {
                return;
            } else {
                console.error(err);
            }
        })

        return () => controller.abort();
    });

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