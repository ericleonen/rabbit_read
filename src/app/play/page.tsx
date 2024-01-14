import { Fragment } from "react";
import StoryPage from "./components/sliderPages/StoryPage";

const pages: React.ReactNode[] = [
    <StoryPage />
]

export default function PlayPage() {

    return pages.map((page: React.ReactNode, index: number) => (
        <Fragment key={`page_${index}`}>
            { page }
        </Fragment>
    ));
}