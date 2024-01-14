import { FaSpinner } from "react-icons/fa6";

export default function Loader() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <FaSpinner className="text-lg text-slate-500 animate-spin" />
        </div>
    )
}