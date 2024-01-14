import { storyAtom } from "@/atoms"
import { useAtomValue } from "jotai"
import { FaSpinner } from "react-icons/fa6";

type StoryProps = {
    blur: boolean,
    blurText: string
}

export default function Story({ blur, blurText }: StoryProps) {
    const story = useAtomValue(storyAtom);

    return (
        <div 
            style={{ overflowY: blur ? "hidden" : "scroll" }}
            className="sm:border-slate-300 border-white border-2 relative max-w-[640px] w-full h-full p-12 bg-white sm:rounded-md flex flex-col"
        >{
            story.loading ? (
                <div className="flex items-center justify-center w-full h-full">
                    <FaSpinner className="text-lg text-slate-500 animate-spin" />
                </div>
            ) : (
                <>
                    { 
                        blur && 
                        <div className="absolute top-0 left-0 w-full h-full rounded-md backdrop-blur-sm flex items-center justify-center">
                            <span className="text-black font-bold text-4xl">{ blurText }</span>
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
                    <button className="w-full py-3 mt-12 font-bold text-white bg-black rounded-md hover:opacity-90">
                        I&apos;m done early
                    </button>
                </>
            )
        }</div>
    )
}