import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full py-2 flex justify-center border-b-2 border-slate-300">
            <Link href="/">
                <h1 className="text-lg text-black font-bold">
                    Rabbit, Read!
                </h1>
            </Link>
        </header>
    )
}