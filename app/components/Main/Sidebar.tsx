"use client";

import { Library } from "lucide-react";
import Image from "next/image";
import { HadarModal } from "../Modals";
import { useState } from "react";

export function MainSidebar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    return (
        <>
            <div className="sm:flex flex-col bg-zinc-800 p-3 lg:w-1/5 md:w-1/3 sm:w-1/2 hidden h-full rounded-xl gap-5">
                <h2 className="flex items-center gap-2 font-bold text-zinc-400 hover:text-white text-xl duration-300 cursor-pointer">
                    <Library size={25} />
                    <span>Meus Pojetos</span>
                </h2>
                <button className="bg-white/10 rounded-full px-2 py-1.5 font-semibold text-sm text-white w-fit hover:bg-white/15 duration-200">
                    Projetos
                </button>
                <div className="flex flex-col">
                    <button
                        onClick={handleOpenModal}
                        className="flex items-center gap-2 hover:bg-white/5 p-2 rounded-xl"
                    >
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
                            <span className="font-bold text-white">
                                Hadar Agency
                            </span>
                            <span className="text-zinc-400 text-sm">
                                Agency Website
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <HadarModal
                isOpen={modalIsOpen}
                onClose={handleOpenModal}
            />
        </>
    );
}
