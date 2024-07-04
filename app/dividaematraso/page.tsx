import Image from "next/image";
import { ModalButton } from "../components/modal-button";
import { Popup } from "../components/popup";

interface DividaProps {
    searchParams: {
      utm_term: string
      utm_medium: string
      utm_content: string
      utm_campaign: string
      utm_source: string
    }
  }

export default function Page({ searchParams }: DividaProps) {
    return (
        <div className="">
            <header className="text-white bg-[#022442] flex justify-center py-4">
                <div className="w-[80px] sm:w-[120px]">
                    <Image
                        className=""
                        src="/images/logokruger.png"
                        width={140}
                        height={35}
                        layout="responsive"
                        alt="Logo Kruger Advocacia"
                    />
                </div>
            </header>
            <main className="bg-zinc-100 flex flex-col items-center justify-center px-4">
                <section className="flex items-center justify-center sm:px-14 pt-8 sm:pt-12 sm:border-x sm:border-zinc-400 bg-zinc-100 sm:bg-white pb-12">
                    <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-12">
                        <div className="flex flex-col items-center gap-4">
                            <h1 className="text-2xl sm:text-4xl font-bold text-center">
                                Descubra como renegociar a sua dívida atrasada por meios jurídicos
                            </h1>
                            <p className="text-zinc-600 text-center text-sm">(o texto abaixo revela como é possível <span className="text-[#ed8428]"><strong>quitar a sua dívida com até 90%</strong></span> de desconto)</p>
                            <div className="max-w-3xl w-full">
                                <Image
                                    className="rounded-xl"
                                    src="/images/credito.png"
                                    width={768}
                                    height={355}
                                    layout="responsive"
                                    alt="Logo Kruger Advocacia"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-8">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl sm:text-2xl font-bold">
                                    Você sabia que as <strong>dívidas em atraso podem ser negociadas com grandes descontos</strong> se você souber agir da maneira correta?
                                </h2>
                                <h2>Vamos mostrar como aproveitar essa oportunidade e os riscos que ela pode gerar.</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-bold text-lg mt-2">Motivos pelos quais a <span className="underline">inadimplência pode ser vantajosa</span> na renegociação:
                                </h2>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex flex-col gap-1">
                                        <h4 className="font-bold text-md">1. Posição Vantajosa</h4>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-zinc-600 text-sm"><strong>Quando você está pagando seu empréstimo em dia, o banco não irá oferecer melhores condições</strong>. No entanto, essa situação muda drasticamente quando você está inadimplente.</p>
                                            <p className="text-zinc-600 text-sm">Os bancos têm <strong>interesse em recuperar o valor emprestado</strong> e estão mais abertos a negociar!</p>
                                        </div>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <h4 className="font-bold text-md">2. Grandes Descontos para Quitação à Vista</h4>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-zinc-600 text-sm">Os bancos <strong>frequentemente oferecem <span className="underline">grandes descontos</span> para quitar contratos em atraso</strong>.Na maioria das vezes, após um ano de atraso, você pode negociar <strong>condições muito mais favoráveis</strong>.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4 border-t border-zinc-400 pt-8">
                                <h2 className="text-xl font-bold">E quais são os riscos que você corre ao fazer isso?</h2>
                                <div className="flex flex-col gap-2">
                                    <p className="text-zinc-600 text-sm">Os bancos não são bobos. <strong>Se você tentar negociar de <span className="underline">forma mal feita</span>, você pode ser processado e o seu <span className="underline">salário e o seu patrimônio podem ser penhorados</span></strong>.</p>
                                    <h2 className="font-bold text-lg mt-2">Por quê Procurar um Advogado Especialista para Negociar?</h2>
                                    <ul className="flex flex-col gap-2">
                                        <li className="flex flex-col gap-1">
                                            <h4 className="font-bold text-md">1. Defesa de Seus Direitos:</h4>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-zinc-600 text-sm"><strong>Protegemos o seu salário e patrimônio</strong> das medidas judiciais que o banco pode utilizar por conta da inadimplência.</p>
                                            </div>
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <h4 className="font-bold text-md">2. Melhores Termos:</h4>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-zinc-600 text-sm">Aumentamos suas <strong>chances de conseguir grandes descontos</strong> e condições favoráveis.</p>
                                            </div>
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <h4 className="font-bold text-md">3. Experiência e Conhecimento:</h4>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-zinc-600 text-sm">Entendemos as práticas e estratégias dos bancos, permitindo que negociemos de maneira eficaz.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full pt-8 border-t border-zinc-400 flex flex-col items-center justify-center">
                                <div className="max-w-xl text-center flex flex-col items-center gap-4">
                                    <h4 className="font-medium text-zinc-600">Informe-se de maneira mais precisa hoje mesmo!</h4>
                                    <h3 className="text-center sm:text-lg font-medium"><strong>Procure um advogado especialista</strong> agora e tire suas dúvidas sobre <strong>como é possível negociar seu empréstimo em atraso</strong>. Você pode transformar uma <strong className="underline">situação difícil em uma oportunidade para reestruturar suas finanças</strong> de maneira positiva.</h3>
                                    <ModalButton>Quero consultar um advogado</ModalButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Popup {...searchParams} />
        </div>
    )
}