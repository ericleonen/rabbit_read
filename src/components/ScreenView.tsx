type ScreenViewProps = {
    children: React.ReactNode,
    centered?: boolean
}

export default function ScreenView({ children, centered }: ScreenViewProps) {
    return (
        <div 
            style={{
                justifyContent: centered ? "center" : "flex-start"
            }}
            className="flex flex-col items-center w-screen h-screen bg-white"
        >
            {children}
        </div>
    )
}