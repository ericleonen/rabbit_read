import { ParentProps } from "@/types/props";

export default function Slider({ children }: ParentProps) {
    return (
        <div className="relative w-full flex-grow bg-slate-200 overflow-hidden">
            <div className="flex h-full">
                { children }
            </div>
        </div>
    )
}