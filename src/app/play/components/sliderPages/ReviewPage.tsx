import { useAtomValue } from "jotai";
import Content from "../Content";
import SliderPage from "./SliderPage";
import { numCorrectAtom, numQuestionsAtom } from "@/atoms";

export default function ReviewPage() {
    const numQuestions = useAtomValue(numQuestionsAtom);
    const numCorrect = useAtomValue(numCorrectAtom);

    return (
        <SliderPage>
            <Content>
                <p className="text-4xl font-bold text-black">Well done!</p>
            </Content>
        </SliderPage>
    )
}