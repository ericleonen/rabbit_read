type BeginModalContainerProps = {
    label: string,
    children: React.ReactNode
}

export default function BeginModalContainer({ label, children }: BeginModalContainerProps) {
    return (
        <div className="relative flex flex-col items-center w-full pt-5 pb-8 border-t-2 border-slate-300">
            <span className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-50%] px-1 text-sm font-bold tracking-wider uppercase bg-white text-slate-400">
                { label }
            </span>
            {children}
        </div>
    )
}