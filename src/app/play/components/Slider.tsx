import { ParentProps } from "@/types/props";

export default function Slider({ children }: ParentProps) {
    return (
        <div className="relative flex-grow w-full overflow-hidden">
            <div className="flex h-full">
                { children }
            </div>
        </div>
    )
}