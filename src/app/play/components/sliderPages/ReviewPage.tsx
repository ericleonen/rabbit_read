import { useAtomValue } from "jotai";
import Content from "../Content";
import SliderPage from "./SliderPage";
import { numCorrectAtom, numQuestionsAtom } from "@/atoms";
import Image from "next/image";

type ResultData = {
    message: string,
    imageSource: string
}

function getResultData(numQuestions: number, numCorrect: number): ResultData {
    const ratio = numCorrect / numQuestions;

    if (ratio >= 1) {
        return {
            message: "Bun-derful!",
            imageSource: "/rabbits/rocket.png"
        }
    } else if (ratio >= 0.8) {
        return {
            message: "Hare-raisingly good!",
            imageSource: "/rabbits/cool.png"
        }
    } else if (ratio >= 0.6) {
        return {
            message: "Be hoppy!",
            imageSource: "/rabbits/catch.png"
        }
    } else if (ratio >= 0.4) {
        return {
            message: "Practice make fur-fect!",
            imageSource: "/rabbits/train.png"
        } 
    } else if (ratio >= 0.2) {
        return {
            message: "Dog rabbit!",
            imageSource: "/rabbits/boxer.png"
        }
    } else {
        return {
            message: "Everybunny has off days.",
            imageSource: "/rabbits/hurt.png"
        }
    }
}

export default function ReviewPage() {
    const numQuestions = useAtomValue(numQuestionsAtom);
    const numCorrect = useAtomValue(numCorrectAtom);

    const resultData = getResultData(numQuestions, numCorrect);

    return (
        <SliderPage>
            <Content centered>
                <Image 
                    src={resultData.imageSource}
                    alt={resultData.message}
                    height={256}
                    width={256}
                    priority={true}
                    quality={50}
                    style={{objectFit: "contain"}}
                />
                <p className="text-4xl font-bold text-center text-black">{resultData.message}</p>
                <p className="mt-2 text-lg font-medium text-center text-slate-500">You got {numCorrect} out of {numQuestions} questions correct</p>
                <button 
                    onClick={() => {
                        if (window) window.location.reload()
                    }}
                    className="w-full py-3 mt-12 font-bold text-white bg-black rounded-md max-w-64 hover:opacity-90"
                >
                    Play again
                </button>
            </Content>
        </SliderPage>
    )
}