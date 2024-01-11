import { storyAtom } from "@/atoms"
import { useAtomValue } from "jotai"
import { FaSpinner } from "react-icons/fa6";

type StoryProps = {
    blur: boolean
}

export default function Story({ blur }: StoryProps) {
    const story = useAtomValue(storyAtom);

    return (
        <div className="max-w-[640px] w-full h-full p-12 overflow-y-scroll bg-white sm:rounded-md flex flex-col">{
            story.loading ? (
                <div className="flex items-center justify-center w-full h-full">
                    <FaSpinner className="text-lg text-slate-500 animate-spin" />
                </div>
            ) : (
                <>
                    <textarea
                        ref={elem => {
                            if (!elem) return;
                            
                            elem.style.height = "0px";
                            elem.style.height = `${elem.scrollHeight}px`;
                        }}
                        disabled
                        value={story.value}
                        className="w-full overflow-hidden text-lg font-medium text-black resize-none shrink-0"
                    />
                    <button className="w-full py-2 mt-12 font-medium border-2 rounded-md hover:bg-sky-500/25 text-sky-500 border-sky-500">
                        I'm done early
                    </button>
                </>
            )
        }</div>
    )
}