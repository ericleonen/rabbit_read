import Header from "@/components/Header";
import ScreenView from "@/components/ScreenView";
import { ParentProps } from "@/types/props";

export default function PlayLayout({ children }: ParentProps) {
    return (
        <ScreenView>
            <Header />
            { children }
        </ScreenView>
    )
}