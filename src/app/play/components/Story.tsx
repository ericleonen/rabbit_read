import { storyAtom } from "@/atoms"
import { useAtomValue } from "jotai"
import { FaSpinner } from "react-icons/fa6";

type StoryProps = {
    blur: boolean
}

export default function Story({ blur }: StoryProps) {
    const story = useAtomValue(storyAtom);

    return (
        <div 
            style={{ overflowY: blur ? "hidden" : "scroll" }}
            className="relative max-w-[640px] w-full h-full p-12 bg-white sm:rounded-md flex flex-col"
        >{
            story.loading ? (
                <div className="flex items-center justify-center w-full h-full">
                    <FaSpinner className="text-lg text-slate-500 animate-spin" />
                </div>
            ) : (
                <>
                    { blur && <div className="absolute top-0 left-0 w-full h-full rounded-md backdrop-blur-sm"/> }
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
                    <button className="w-full py-2 mt-12 font-medium border-2 rounded-md hover:bg-sky-500/25 text-sky-500 border-sky-500">
                        I&apos;m done early
                    </button>
                </>
            )
        }</div>
    )
}