import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tiago Henrique - Portfolio",
    description:
        "Aqui posso mostrar meus projetos já trabalhados e te dizer o meu diferencial.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={inter.className + " bg-zinc-950"}
            >
                {children}
            </body>
        </html>
    );
}
