import { useAtomValue, useSetAtom } from "jotai";
import Content from "../Content";
import Timer, { useAutoTimer } from "../Timer";
import SliderPage from "./SliderPage";
import { questionsAtom, sliderIndexAtom } from "@/atoms";
import Loader from "../Loader";
import { MCQ } from "@/types/questions";
import Question from "../Question";
import { useEffect, useState } from "react";

export default function QuestionPage() {
    const questions = useAtomValue(questionsAtom);
    const on = useAutoTimer() && !questions.loading;
    const [numAnswered, setNumAnswered] = useState(0);
    const setSliderIndex = useSetAtom(sliderIndexAtom);

    useEffect(() => {
        if (numAnswered === questions.value.length) {
            setSliderIndex(prev => prev + 1);
        }
    }, [numAnswered]);

    return (
        <SliderPage>
            <Timer {...{on}} duration={30000} />
            <Content style={{ overflowY: "scroll" }} >{
                questions.loading ? (
                    <Loader />
                ) : 
                questions.value.map((question: MCQ, questionIndex: number) =>
                    <Question 
                        key={`question_${questionIndex}`}
                        {...{question, questionIndex, setNumAnswered}}
                    />
                )
            }</Content>
        </SliderPage>
    )
}