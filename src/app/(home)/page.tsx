import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-white">
      <header className="flex justify-center w-full py-3 font-medium border-b-2 border-slate-200 text-slate-400">
        Made by 
        <Link 
          href="https://github.com/ericleonen"
          className="ml-1 underline text-sky-500"
        >
          ericleonen
        </Link>
      </header>
      <div className="flex items-center flex-grow">
        <div className="flex flex-col max-w-[400px] items-center justify-center">
          <div className="relative rounded-md w-36 h-36">
                <Image 
                    src="/rabbits/zen.png"
                    alt={`zen rabbit`}
                    fill
                    priority={true}
                    quality={10}
                    style={{objectFit: "contain"}}
                />
            </div>
          <h1 className="mt-3 text-4xl font-bold text-center text-black">Rabbit, Read!</h1>
          <p className="mt-1 text-lg font-medium text-center text-slate-500">The fast, fun, and free way to practice&nbsp;speed&nbsp;reading</p>
          <Link 
            href="/play"
            className="px-3 py-2 mt-5 font-bold border-2 rounded-md whitespace-nowrap w-min border-sky-500 text-sky-500 hover:bg-sky-200 bg-sky-100"
          >
            Get started now
          </Link>
        </div>
      </div>
      <footer className="flex justify-center w-full py-3 font-medium border-t-2 border-slate-200 whitespace-nowrap">
        <span className="text-slate-400">Beautiful graphics by</span>
        <Link
          href="https://www.freepik.com/author/catalyststuff"
          className="ml-1 underline text-sky-500"
        >
          catalyststuff on Freepik
        </Link>
      </footer>
    </div>
  )
}