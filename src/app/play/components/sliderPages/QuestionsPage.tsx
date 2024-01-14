import { useAtomValue } from "jotai";
import Content from "../Content";
import Timer, { useAutoTimer } from "../Timer";
import SliderPage from "./SliderPage";
import { questionsAtom } from "@/atoms";
import Loader from "../Loader";

export default function QuestionPage() {
    const questions = useAtomValue(questionsAtom);
    const on = useAutoTimer() && !questions.loading;

    return (
        <SliderPage>
            <Timer {...{on}} duration={10000} />
            <Content>{
                questions.loading ? (
                    <Loader />
                ) : (
                    <>Loaded!</>
                )   
            }</Content>
        </SliderPage>
    )
}