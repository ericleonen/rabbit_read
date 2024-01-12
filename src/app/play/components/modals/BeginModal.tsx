import { beginModalAtom } from "@/atoms";
import { useAtom } from "jotai";
import Modal from "./Modal";
import { useEffect } from "react";

export default function BeginModal() {
    const [visible, setVisible] = useAtom(beginModalAtom);

    useEffect(() => {
        console.log(visible);
    }, [visible]);

    return (
        <Modal {...{visible}} >
            Begin!
        </Modal>
    )
}