import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-screen h-screen bg-white justify-center">
      <div className="flex items-center">
        <div className="flex flex-col max-w-[400px] items-center justify-center">
          <div className="relative w-36 h-36 rounded-md">
                <Image 
                    src="/rabbits/zen.png"
                    alt={`zen rabbit`}
                    fill
                    priority={true}
                    quality={10}
                    style={{objectFit: "contain"}}
                />
            </div>
          <h1 className="text-4xl font-bold text-black mt-3">Rabbit, Read!</h1>
          <p className="mt-1 text-lg font-medium text-slate-500 text-center">The fast, fun, and free way to practice&nbsp;speed&nbsp;reading</p>
          <Link 
            href="/play"
            className="whitespace-nowrap w-min py-2 px-3 mt-5 font-bold border-2 rounded-md border-sky-500 text-sky-500 hover:bg-sky-200 bg-sky-100"
          >
            Get started now
          </Link>
        </div>
      </div>
    </div>
  )
}