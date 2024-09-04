import Link from "next/link";

export default function Footer() {
    return (
        <footer className="sm:flex hidden text-white m-5 gap-10">
            <span className="font-semibold">
                tiagohll ©2024
            </span>
            <Link href="/" className="hover:underline">
                Início
            </Link>
            <Link href="/" className="hover:underline">
                Projetos
            </Link>
        </footer>
    );
}
