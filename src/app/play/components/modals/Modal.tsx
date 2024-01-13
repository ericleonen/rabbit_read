type ModalProps = {
    visible: boolean,
    children: React.ReactNode
}

export default function Modal({ visible, children }: ModalProps) {
    if (visible) {
        return (
            <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/50">
                <div className="w-full h-full p-3 bg-white sm:h-auto sm:w-[400px] sm:rounded-md flex flex-col items-center justify-center">
                    { children }
                </div>
            </div>
        )
    } else {
        return null;
    }
}