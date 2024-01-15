import { Transition } from "@headlessui/react";

type ModalProps = {
    visible: boolean,
    children: React.ReactNode
}

export default function Modal({ visible, children }: ModalProps) {
    return (
        <Transition
            show={visible}
            className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/50"
            enter="transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Transition.Child
                className="border-2 border-white sm:border-slate-300 w-full h-full p-3 bg-white sm:h-auto sm:w-[400px] sm:rounded-md flex flex-col items-center justify-center"
                enter="transition-transform"
                enterFrom="scale-75"
                enterTo="scale-100"
                leave="transition-transform"
                leaveFrom="scale-100"
                leaveTo="scale-75"
            >
                { children }
            </Transition.Child>
        </Transition>
    )
}