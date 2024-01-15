import { sliderIndexAtom, storyAtom } from "@/atoms"
import { useAtomValue, useSetAtom } from "jotai"
import Content from "./Content";
import Loader from "./Loader";

type StoryProps = {
    blur: boolean,
    blurText: string
}

export default function Story({ blur, blurText }: StoryProps) {
    const story = useAtomValue(storyAtom);
    const setSliderIndex = useSetAtom(sliderIndexAtom);

    return (
        <Content style={{ overflowY: blur ? "hidden" : "scroll" }}>{
            story.loading ? (
                <Loader />
            ) : (
                <>
                    { 
                        blur && 
                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-md backdrop-blur-sm">
                            <span className="text-4xl font-bold text-black">{ blurText }</span>
                        </div> 
                    }
                    <p className="text-2xl font-bold text-black">{story.value.title}</p>
                    <textarea
                        ref={elem => {
                            if (!elem) return;
                            
                            elem.style.height = "0px";
                            elem.style.height = `${elem.scrollHeight}px`;
                        }}
                        disabled
                        value={story.value.story}
                        className="w-full mt-6 overflow-hidden text-lg font-medium text-black resize-none shrink-0"
                    />
                    <button 
                        onClick={() => setSliderIndex(prev => prev + 1)}
                        className="w-full py-3 mt-12 font-bold text-white bg-black rounded-md hover:opacity-90"
                    >
                        I&apos;m done early
                    </button>
                </>
            )
        }</Content>
    )
}