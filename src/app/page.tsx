import ScreenView from "./_components/ScreenView";

export default function Home() {
  return (
    <ScreenView centered>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Untitled</h1>
        <input
          type="text"
          placeholder="Paste in a story here"
          className="w-full p-2 mt-6 font-medium border-2 rounded-md placeholder:text-center text-sky-500 border-sky-500 focus:outline-none focus:shadow-[0_0_0_4px] focus:shadow-sky-500/25"
        />
        <div className="relative h-[2px] w-full bg-black my-4">
          <span className="bg-white text-xs font-bold tracking-wider absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] px-1">OR</span>
        </div>
        <button className="w-full p-2 font-medium text-center border-2 rounded-md text-sky-500 border-sky-500 hover:bg-sky-500/25">
          Use a random story
        </button>
        <button className="underline text-sm mt-4">How do I play?</button>
      </div>
    </ScreenView>
  )
}