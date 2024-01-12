import { difficultyAtom } from "@/atoms";
import { Trigger } from "@/types/functions";
import { useAtom } from "jotai";
import Image from "next/image";

type DifficultiesData = {
    imageSource: string
}

const difficultiesDataMap: { [difficulty: string]: DifficultiesData } = {
    "Easy": {
        imageSource: "/rabbits/baby.jpg"
    },
    "Normal": {
        imageSource: "/rabbits/zen.jpg"
    },
    "Hard": {
        imageSource: "/rabbits/smart.jpg"
    }
}

export default function DifficultySelector() {
    const [difficulty, setDifficulty] = useAtom(difficultyAtom);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="relative h-[2px] w-full bg-slate-300 my-5">
                <span className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] px-1 text-sm font-bold tracking-wider uppercase bg-white text-slate-400">Choose difficulty</span>
            </div>
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
        </div>
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
            style={{ opacity: selected ? 1 : 0.25 }}
            className="transition-opacity flex flex-col items-center justify-center w-[30%] p-3 border-2 border-black rounded-md h-min bg-slate-200"
        >
            <div className="relative w-full overflow-hidden border-2 border-black rounded-md aspect-square">
                <Image 
                    src={difficultiesDataMap[value].imageSource}
                    alt={`${value} rabbit`}
                    fill
                    priority={true}
                    quality={20}
                />
            </div>
            <p className="mt-3 font-bold text-black">{value}</p>
        </button>
    )
}