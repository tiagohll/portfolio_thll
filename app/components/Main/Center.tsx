"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HadarModal } from "../Modals";

export function MainCenter() {
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
                            Inicio
                        </button>
                        {/* <button className="bg-white/10 rounded-full px-2 py-1.5 font-semibold text-sm text-white w-fit hover:bg-white/15 duration-200">
                            Projetos
                        </button> */}
                    </div>

                    <div className="flex">
                        <button
                            onClick={handleOpenModal}
                            className="bg-white/5 group rounded-xl pr-10 flex items-center gap-4 h-fit overflow-hidden hover:bg-white/10 transition-colors my-2"
                        >
                            <div className="bg-gradient-to-br from-red-600 to-orange-500 p-2 rounded-xl">
                                <Image
                                    src="/hadar.svg"
                                    alt="Capa do projeto"
                                    width={50}
                                    height={50}
                                    className="invert"
                                />
                            </div>

                            <strong className="font-semibold text-white">
                                Hadar Agency
                            </strong>
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                        <span className="font-bold text-white text-3xl hover:underline">
                            Sobre mim
                        </span>
                        <p className="text-zinc-400 max-w-xl">
                            Sou Tiago Henrique, um jovem de
                            15 anos natural de Lagoa
                            Formosa, Minas Gerais. Desde os
                            meus 10 anos, a tecnologia me
                            fascina, e foi nesse universo
                            que encontrei minhas primeiras
                            paixões: a programação e o
                            design.
                        </p>
                        <p className="text-zinc-400 max-w-xl">
                            A programação, em particular,
                            tem sido meu foco principal nos
                            últimos três anos. A cada linha
                            de código, abro portas para um
                            mundo de possibilidades e me
                            aprofundo em um campo que se
                            renova a cada dia. Ao mesmo
                            tempo, a experiência de cinco
                            anos com design me proporcionou
                            uma visão mais ampla e criativa
                            para resolver problemas,
                            habilidades que se complementam
                            e enriquecem meu trabalho.
                        </p>
                        <p className="text-zinc-400 max-w-xl">
                            Embora minha jornada
                            profissional ainda esteja no
                            início, com projetos
                            majoritariamente como
                            freelancer, estou ansioso para
                            explorar novas oportunidades e
                            desafios. Acredito que a
                            combinação de minhas habilidades
                            técnicas e criativas me
                            permitirá contribuir
                            significativamente para projetos
                            inovadores e impactantes.
                        </p>
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
