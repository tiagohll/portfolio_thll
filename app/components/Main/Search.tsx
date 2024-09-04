"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HadarModal } from "../Modals";

export function MainSearch() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(!modalIsOpen);
    };
    return (
        <>
            <div className="flex flex-col overflow-auto bg-zinc-800 w-full h-full sm:rounded-xl sm:mb-0 mb-20">
                <div className="flex flex-col p-3 h-1/6 bg-gradient-to-b from-blue-400/5 to-zinc-800">
                    <div className="flex gap-2">
                        <button className="bg-white rounded-full px-2 py-1.5 font-semibold text-sm text-black w-fit">
                            Projetos
                        </button>
                    </div>

                    <span className="font-bold text-white text-3xl mt-6 hover:underline">
                        Navegar pelos projetos
                    </span>
                    <div className="flex">
                        <button
                            onClick={handleOpenModal}
                            className="rounded-xl w-full sm:w-[320px] h-[140px] flex items-center overflow-hidden my-2"
                        >
                            <Image
                                src="/banners/hadar-search.png"
                                alt="Capa do projeto"
                                width={320}
                                height={140}
                                className="w-full"
                            />
                        </button>
                    </div>

                    <div className="flex flex-col sm:items-baseline sm:text-start items-center text-center gap-2 my-5">
                        <span className="font-bold text-white text-3xl hover:underline">
                            E ai, está pronto para começar?
                        </span>
                        <Link
                            href="https://api.whatsapp.com/send/?phone=5534996805599&text&type=phone_number&app_absent=0"
                            className="flex items-center gap-3 bg-blue-600 p-5 rounded-full w-fit font-bold text-white hover:bg-blue-500 hover:scale-105 duration-300 mb-20"
                            target="_blank"
                        >
                            <Image
                                src="./whatsapp.svg"
                                alt="WhatsApp"
                                width={30}
                                height={30}
                            />
                            Entrar em contato
                        </Link>
                    </div>
                </div>
            </div>
            <HadarModal
                isOpen={modalIsOpen}
                onClose={handleOpenModal}
            />
        </>
    );
}
