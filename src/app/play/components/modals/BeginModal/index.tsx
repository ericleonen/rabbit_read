import { beginModalAtom } from "@/atoms";
import { useAtom } from "jotai";
import Modal from "../Modal";
import DifficultySelector from "./DifficultySelector";
import Instructions from "./Instructions";

export default function BeginModal() {
    const [visible, setVisible] = useAtom(beginModalAtom);

    return (
        <Modal {...{visible}} >
            <p className="mt-3 mb-6 text-2xl font-bold text-black">Ready to read?</p>
            <Instructions />
            <DifficultySelector />
            <button 
                className="w-full py-3 font-bold text-white bg-black rounded-md hover:bg-black/90"
            >
                Begin
            </button>
        </Modal>
    )
}