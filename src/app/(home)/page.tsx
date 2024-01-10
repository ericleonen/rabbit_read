import Link from "next/link";
import ScreenView from "../../components/ScreenView";

export default function Home() {
  return (
    <ScreenView centered>
      <div className="flex items-center">
        <div className="flex flex-col max-w-[400px]">
          <h1 className="text-4xl font-bold text-black">Rabbit, Read!</h1>
          <p className="mt-1 text-lg font-medium text-slate-500">The fast, fun, and free way to practice speed reading!</p>
          <Link 
            href="#"
            className="p-2 mt-3 font-medium border-2 rounded-md border-sky-500 text-sky-500 hover:bg-sky-500/25"
          >
            Get started now
          </Link>
        </div>
      </div>
    </ScreenView>
  )
}