import { useAtomValue, useSetAtom } from "jotai";
import Content from "../Content";
import Timer, { useAutoTimer } from "../Timer";
import SliderPage from "./SliderPage";
import { difficultyAtom, questionsAtom, sliderIndexAtom } from "@/atoms";
import Loader from "../Loader";
import { MCQ } from "@/types/questions";
import Question from "../Question";
import { useEffect, useState } from "react";
import { DIFFICULTY_DURATIONS } from "@/config";

export default function QuestionPage() {
    const questions = useAtomValue(questionsAtom);
    const on = useAutoTimer();
    const [numAnswered, setNumAnswered] = useState(0);
    const setSliderIndex = useSetAtom(sliderIndexAtom);

    useEffect(() => {
        if (numAnswered > 0 && numAnswered === questions.value.length) {
            setSliderIndex(prev => prev + 1);
        }
    }, [numAnswered]);

    const difficulty = useAtomValue(difficultyAtom);

    return (
        <SliderPage>
            <Timer on={on && !questions.loading} duration={DIFFICULTY_DURATIONS[difficulty].questions} />
            <Content style={{ 
                overflowY: "hidden",
                padding: 0
            }} >{
                questions.loading ? (
                    <Loader />
                ) : 
                questions.value.map((question: MCQ, questionIndex: number) =>
                    <Question 
                        key={`question_${questionIndex}`}
                        {...{question, questionIndex, numAnswered, setNumAnswered}}
                    />
                )
            }</Content>
        </SliderPage>
    )
}