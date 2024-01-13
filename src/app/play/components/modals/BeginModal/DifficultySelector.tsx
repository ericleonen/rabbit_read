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
        imageSource: "/rabbits/baby.jpg",
        color: colors.amber
    },
    "Normal": {
        imageSource: "/rabbits/zen.jpg",
        color: colors.pink
    },
    "Hard": {
        imageSource: "/rabbits/smart.jpg",
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
            <div className="relative w-full overflow-hidden rounded-md aspect-square">
                <Image 
                    src={difficultiesDataMap[value].imageSource}
                    alt={`${value} rabbit`}
                    fill
                    priority={true}
                    quality={20}
                />
            </div>
            <p 
                style={{ color: difficultiesDataMap[value].color[500] }}
                className="mt-3 font-bold"
            >
                {value}
            </p>
        </button>
    )
}