import { beginModalAtom } from "@/atoms";
import { useAtom } from "jotai";
import Modal from "../Modal";
import DifficultySelector from "./DifficultySelector";

export default function BeginModal() {
    const [visible, setVisible] = useAtom(beginModalAtom);

    return (
        <Modal {...{visible}} >
            <p className="text-2xl font-bold text-black">Ready to read?</p>
            <DifficultySelector />
        </Modal>
    )
}