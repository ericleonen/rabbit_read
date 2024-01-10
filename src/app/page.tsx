import ScreenView from "./_components/ScreenView";

export default function Home() {
  return (
    <ScreenView centered>
      <div className="flex flex-col items-center w-[280px]">
        <h1 className="text-4xl font-bold text-black">Rabbit, Read!</h1>
        <button className="flex items-center justify-center w-full p-2 mt-3 font-medium text-center border-2 rounded-md text-sky-500 border-sky-500 hover:bg-sky-500/25">
          Start
        </button>
        <button className="mt-4 text-sm font-medium underline text-slate-400 hover:text-sky-500">How do I play?</button>
      </div>
    </ScreenView>
  )
}