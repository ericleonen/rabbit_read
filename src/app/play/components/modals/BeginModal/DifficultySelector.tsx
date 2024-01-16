import { difficultyAtom } from "@/atoms";
import { Trigger } from "@/types/functions";
import { useAtom } from "jotai";
import Image from "next/image";
import colors from "tailwindcss/colors";
import BeginModalContainer from "./BeginModalContainer";

type DifficultiesData = {
    imageSource: string,
    color: any,
}

const difficultiesDataMap: { [difficulty: string]: DifficultiesData } = {
    "Easy": {
        imageSource: "/rabbits/balloon.png",
        color: colors.amber
    },
    "Normal": {
        imageSource: "/rabbits/zen.png",
        color: colors.pink
    },
    "Hard": {
        imageSource: "/rabbits/think.png",
        color: colors.sky
    }
}

export default function DifficultySelector() {
    const [difficulty, setDifficulty] = useAtom(difficultyAtom);

    return (
        <BeginModalContainer label="Choose difficulty">
            <div className="flex justify-around w-full">{
                Object.keys(difficultiesDataMap).map(value =>
                    <DifficultyOption
                        key={`difficulty_${value}`}
                        {...{value}}
                        selected={value === difficulty}
                        onSelect={() => setDifficulty(value)}
                    />
                )
            }</div>
        </BeginModalContainer>
    )
}

type DifficultyOptionProps = {
    value: string,
    selected: boolean,
    onSelect: Trigger
}

function DifficultyOption({ value, selected, onSelect }: DifficultyOptionProps) {
    return (
        <button
            onClick={onSelect}
            style={{ 
                opacity: selected ? 1 : 0.3,
                backgroundColor: difficultiesDataMap[value].color[100],
                borderColor: selected ? difficultiesDataMap[value].color[500] : "transparent"
            }}
            className="transition-[opacity,colors] flex flex-col items-center justify-center w-[30%] p-3 rounded-md h-min bg-slate-200 border-2"
        >
            <Image 
                src={difficultiesDataMap[value].imageSource}
                alt={`${value} rabbit`}
                height={100}
                width={100}
                priority={value === "Easy"}
                quality={50}
                style={{objectFit: "contain"}}
            />
            <p 
                style={{ color: difficultiesDataMap[value].color[500] }}
                className="mt-3 font-bold"
            >
                {value}
            </p>
        </button>
    )
}