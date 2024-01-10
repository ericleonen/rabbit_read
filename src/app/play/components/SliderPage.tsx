import { ParentProps } from "@/types/props";

export default function SliderPage({ children }: ParentProps) {
    return (
        <div className="h-full w-screen">
            { children }
        </div>
    )
}