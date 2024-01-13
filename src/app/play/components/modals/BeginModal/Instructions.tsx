import BeginModalContainer from "./BeginModalContainer";

const instructions = [
    "Read the story as fast as you can. You have until the timer (above the story) runs out to read",
    "Answer some multiple choice questions about the story you just read. Keep in mind that this quiz is also timed!"
]

export default function Instructions() {
    return (
        <BeginModalContainer label="How to play">
            <div className="flex flex-col w-full px-5">{    
                instructions.map((value: string, index: number) =>
                    <Instruction 
                        key={`instruction_${index}`}
                        {...{value, index}}
                    />
                )
            }</div>
        </BeginModalContainer>
    )
}

type InstructionProps = {
    index: number,
    value: string
}

function Instruction({ index, value }: InstructionProps) {
    return (
        <div className="flex w-full text-black">
            <div className="w-3 mr-3 font-bold text-right">{index + 1}.</div>
            <div className="flex-grow font-medium">{value}</div>
        </div>
    )
}

