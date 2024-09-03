"use client";

import {
    Github,
    ThumbsDown,
    ThumbsUp,
    X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function HadarModal({
    isOpen,
    onClose,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="flex flex-col z-10 gap-5 items-center justify-center p-5">
                <div className="bg-zinc-800 rounded-xl p-5 w-[60vw] h-[60vh] overflow-auto">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 p-2 group">
                            <div className="bg-gradient-to-br from-red-600 to-orange-500 p-2 rounded-xl">
                                <Image
                                    src={"hadar.svg"}
                                    alt="Logo Hadar"
                                    width={35}
                                    height={35}
                                    className="invert"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white group-hover:underline">
                                    Hadar Agency
                                </span>
                                <span className="text-zinc-400 text-sm">
                                    Agency Website
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="hover:bg-white/5 p-2 rounded-full text-zinc-500 hover:text-white duration-200"
                        >
                            <X />
                        </button>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center">
                        <Link
                            href="https://www.agenciahadar.com.br/"
                            target="_blank"
                            className="flex flex-col gap-5 items-center justify-center my-3"
                        >
                            <div className="w-[720px] h-[320px] bg-blue-400 rounded-xl overflow-hidden">
                                <Image
                                    src="/banners/hadar.png"
                                    alt="Banner Hadar"
                                    width={720}
                                    height={320}
                                    className="h-full w-full"
                                />
                            </div>
                            <div className="bg-[#4e757c] text-white font-bold p-3 rounded-full w-[720px] text-center hover:bg-[#3a6369] duration-200">
                                Ver site
                            </div>
                        </Link>
                        <Link
                            href="#"
                            className="hover:bg-white/5 p-2 rounded-full text-zinc-500 hover:text-white duration-200"
                        >
                            <Github />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2"></div>
                </div>
                <div className="bg-zinc-800 text-white rounded-xl p-2 px-9 w-[60vw] flex gap-3 items-center">
                    <span className="font-semibold">
                        Dê um Feedback!
                    </span>
                    <div className="flex gap-3 items-center h-full">
                        <button className="hover:bg-white/5 p-2 rounded-full text-zinc-500 hover:text-white duration-200">
                            <ThumbsUp />
                        </button>
                        <div className="w-[1px] h-1/2 bg-zinc-700 rounded-full" />
                        <button className="hover:bg-white/5 p-2 rounded-full text-zinc-500 hover:text-white duration-200">
                            <ThumbsDown />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
