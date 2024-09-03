import { House, Search } from "lucide-react";
import Link from "next/link";

export function Mobilebar() {
    return (
        <footer className="sm:hidden flex justify-center items-center gap-2 w-full bg-zinc-900 p-2 fixed z-[5] left-0 bottom-0 text-white rounded-t-xl">
            <Link
                href="/"
                className="bg-white/5 p-3 rounded-xl flex flex-col items-center font-bold hover:bg-white/15 duration-200"
            >
                <House />
            </Link>
            <Link
                href="/"
                className="bg-white/5 p-3 rounded-xl flex flex-col items-center font-bold hover:bg-white/15 duration-200"
            >
                <Search />
            </Link>
        </footer>
    );
}
