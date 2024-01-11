import Header from "@/components/Header";
import ScreenView from "@/components/ScreenView";
import { ParentProps } from "@/types/props";
import Slider from "./components/Slider";

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