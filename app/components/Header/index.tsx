import { House, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sm:flex hidden items-center justify-between gap-5">
            <code className="flex items-center gap-3 text-sm bg-zinc-800 text-zinc-500 p-2 rounded-xl cursor-default">
                https://tiagohll.vercel.app/
            </code>
            <div className="flex w-full items-center justify-center gap-5">
                <Link
                    href="/"
                    className="bg-zinc-800 p-3 rounded-full hover:scale-105 duration-200"
                >
                    <House className="text-zinc-500" />
                </Link>
                <Link
                    href="/search"
                    className="flex items-center gap-3 bg-zinc-800 p-3 rounded-full hover:scale-105 w-fit text-zinc-500 hover:bg-zinc-700 cursor-pointer duration-200 group"
                >
                    <Search className="group-hover:text-white duration-[400ms]" />
                    <span>Projetos</span>
                </Link>
            </div>
        </header>
    );
}
