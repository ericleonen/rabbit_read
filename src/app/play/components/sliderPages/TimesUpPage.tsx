import Content from "../Content"
import Timer, { useAutoTimer } from "../Timer"
import SliderPage from "./SliderPage"

type TimesUpPageProps = {
    message: string
}

export default function TimesUpPage({ message }: TimesUpPageProps) {
    const on = useAutoTimer();

    return (
        <SliderPage>
            <Timer {...{on}} duration={3000} />
            <Content centered>
                <p className="text-4xl font-bold text-black">Times up!</p>
                <p className="mt-3 text-lg font-medium text-center text-slate-500">{ message }</p>
            </Content>
        </SliderPage>
    )
}