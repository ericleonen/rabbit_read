import { CSSProperties } from "react"

type ContentProps = {
    children: React.ReactNode,
    centered?: boolean,
    style?: CSSProperties
}

export default function Content({ children, centered, style }: ContentProps) {
    return (
        <div 
            style={{
                justifyContent: centered ? "center" : "start",
                alignItems: centered ? "center" : "start",
                ...style
            }}
            className="sm:border-slate-300 border-white border-2 relative max-w-[450px] w-full flex-grow p-12 bg-white sm:rounded-md flex flex-col"
        >
            { children }
        </div>
    )
}