import Header from "@/components/Header";
import ScreenView from "@/components/ScreenView";
import { ParentProps } from "@/types/props";
import Slider from "./components/Slider";
import { atom } from "jotai";

export const showBeginModal = atom<boolean>(false);

export default function PlayLayout({ children }: ParentProps) {
    return (
        <ScreenView>
            <Header />
            <Slider>
                { children }
            </Slider>

            {/* MODALS */}
        </ScreenView>
    )
}