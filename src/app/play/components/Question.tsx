import { numCorrectAtom } from "@/atoms";
import { MCQ } from "@/types/questions"
import { useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react"
import colors from "tailwindcss/colors";

type QuestionProps = {
    question: MCQ,
    questionIndex: number,
    numAnswered: number,
    setNumAnswered: React.Dispatch<React.SetStateAction<number>>
}

export default function Question({ question, questionIndex, numAnswered, setNumAnswered }: QuestionProps) {
    const [selectedOption, setSelectedOption] = useState(-1);
    const setNumCorrect = useSetAtom(numCorrectAtom);

    useEffect(() => {
        if (selectedOption >= 0) {
            const timeout = setTimeout(() => {
                setNumAnswered(prev => prev + 1);
            }, 500);

            if (selectedOption === question.correctIndex) {
                setNumCorrect(prev => prev + 1);
            }

            return () => clearTimeout(timeout)
        }
    }, [selectedOption]);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (questionIndex === numAnswered && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [questionIndex, numAnswered]);

    return (
        <div 
            ref={ref}
            className="flex flex-col justify-center w-full h-full p-12 shrink-0"
        >
            <div className="flex w-full mb-2 font-bold text-black">
                <div className="w-4 mr-2 text-right">{ questionIndex + 1 }.</div>
                <div className="flex-grow">{ question.question }</div>
            </div>
            {
                question.options.map((option: string, optionIndex: number) =>
                    <button 
                        key={`option_${optionIndex}`}
                        disabled={selectedOption >= 0}
                        style={selectedOption >= 0 ? {
                            backgroundColor: 
                                optionIndex === question.correctIndex ? colors.emerald[100] :
                                selectedOption === optionIndex ? colors.red[100] : 
                                "",
                            borderColor:
                                optionIndex === question.correctIndex ? colors.emerald[500] :
                                selectedOption === optionIndex ? colors.red[500] : 
                                "",
                            color:
                                optionIndex === question.correctIndex ? colors.emerald[500] :
                                selectedOption === optionIndex ? colors.red[500] : 
                                "",
                        } : {}}
                        onClick={() => setSelectedOption(optionIndex)}
                        className="p-5 mt-1 ml-4 font-medium text-left border-2 rounded-md hover:bg-sky-100 border-slate-300 text-slate-400 disabled:hover:bg-white disabled:cursor-not-allowed"
                    >
                        { option }
                    </button>
                )
            }
        </div>
    )
}