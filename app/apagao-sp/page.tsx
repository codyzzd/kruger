import Image from "next/image";
import { ModalButton } from "../components/modal-button";
import { PopupApagao } from "../components/popup-apagao";

interface pageProps {
    searchParams: {
      utm_term: string
      utm_medium: string
      utm_content: string
      utm_campaign: string
      utm_source: string
    }
  }

export default function Page({ searchParams }: pageProps) {
    return (
        <>
            <PopupApagao {...searchParams} />
            <div className="fixed top-0 left-0 w-full py-2 bg-[#022342] flex justify-center items-center z-50">
                <div className="relative h-12 w-24 flex justify-center">
                    <Image
                        src="/images/logokruger.png"
                        alt=""
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
            </div>
            <main className="pt-24">
                <section className="w-full flex items-center justify-center px-4">
                    <div className="w-full flex justify-center items-center flex-col gap-12">
                        <div className="relative w-full max-w-4xl h-96 sm:block hidden">
                            <Image
                                src="/images/art.jpeg"
                                alt=""
                                objectFit="contain"
                                layout="fill"
                            />
                        </div>
                        <div className="relative w-full max-w-4xl h-64 sm:hidden block ">
                            <Image
                                src="/images/art2.png"
                                alt=""
                                objectFit="contain"
                                layout="fill"
                            />
                        </div>
                    </div>
                </section>
                <section className="py-10 bg-zinc-50 px-4">
                    <div className="w-full flex justify-center">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            <div className="flex flex-col gap-2 font-medium">
                                <h1 className="text-2xl font-bold">Quem pode ser indenizado?</h1>
                                <h4 className="text-lg">Se você foi prejudicado por falta de energia, pode ter direito a dois tipos de indenização:</h4>
                            </div>
                            <div className="flex flex-col gap-10 sm:gap-16 max-w-5xl">
                                <div className="relative flex flex-col gap-4 font-medium">
                                    <div>
                                        <h2 className="font-semibold text-2xl">1. Danos Morais</h2>
                                        <p>Compensação por sofrimento emocional e abalo na rotina, como:</p>
                                    </div>
                                    <ul className="flex flex-col gap-1 list-disc ms-5">
                                        <li>Longos períodos sem energia (acima de 72 horas).</li>
                                        <li>Impossibilidade de uso de itens essenciais, como medicamentos refrigerados;</li>
                                        <li>Estresse por não poder trabalhar, estudar ou realizar tarefas diárias.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4 font-medium">
                                    <div>
                                        <h2 className="font-semibold text-2xl">2.  Danos Materiais</h2>
                                        <p>Prejuízos financeiros causados pela interrupção, como:</p>
                                    </div>
                                    <ul className="flex flex-col gap-1 list-disc ms-5">
                                        <li>Eletrodomésticos queimados ou equipamentos danificados.</li>
                                        <li>Perda de alimentos por falta de refrigeração.</li>
                                        <li>Impacto direto no trabalho, especialmente se você depende de energia.</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex flex-col gap-4 font-medium">
                                        <div>
                                            <h1 className="text-2xl font-bold">Quer entrar com o pedido de indenização? Veja como começar</h1>
                                            <p>Se você foi prejudicado pela falta de energia, o caminho para a indenização começa com o suporte certo. Um advogado especiapzado pode:</p>
                                        </div>
                                        <ul className="flex flex-col gap-1 list-disc ms-5">
                                            <li>Analisar seu caso: Identificar se você tem direito à indenização.</li>
                                            <li>Organizar as provas: Como fotos, notas fiscais e protocolos de reclamação.</li>
                                            <li>Entrar com uma ação judicial: Pedido de compensação pelos transtornos e danos causado pelo apagão</li>
                                        </ul>
                                    </div>
                                </div>
                                <ModalButton>Solicite contato agora</ModalButton>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}