type ModalProps = {
    visible: boolean,
    children: React.ReactNode
}

export default function Modal({ visible, children }: ModalProps) {
    if (visible) {
        return (
            <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/50">
                <div className="p-3 bg-white rounded-md">
                    { children }
                </div>
            </div>
        )
    } else {
        return null;
    }
}