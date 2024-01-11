import { ParentProps } from "@/types/props";

export default function SliderPage({ children }: ParentProps) {
    return (
        <div className="flex items-center justify-center w-screen h-full shrink-0">
            { children }
        </div>
    )
}