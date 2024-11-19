import Image from "next/image"
import Section from "../components/section"
import Card from "../components/card"
import Button from "../components/button"

export default function Page() {
    return (
        <>
            <div className="fixed top-0 w-full bg-gradient-to-r from-[#05081B] to-[#2A3162] text-center py-2 z-50">
                <p className="text-white text-sm sm:text-base"><strong>EXCLUSIVO</strong> para <strong>DÍVIDAS</strong> acima de <strong>80 mill reais</strong></p>
            </div>
            <header className="bg-header w-full min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4 sm:pt-0">
                <div className="max-w-6xl flex flex-col items-center text-center gap-8">
                    <div className="relative w-[124px] h-[48px] sm:w-[160px] sm:h-[62px]">
                        <Image
                            src="/images/logokruger.png"
                            alt="Logo Kruger Toledo Advocacia"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-3xl sm:text-5xl">Reduza até <strong>90% da sua dívida</strong> e retome o controle financeiro da sua vida!</h1>
                    <p className="text-xl font-light merriwather max-w-3xl">Na análise de passivos da <strong className="merriwather font-bold">Kruger Toledo Advocacia</strong> você receberá um plano de redução das suas dívidas <strong>100% personalizado</strong> para alcançar a sua estabilidade</p>
                    <p className="text-xl font-light merriwather max-w-sm">Tenha <strong className="merriwather font-bold">acesso a análise de passivos</strong> de um advogado especialista em direito bancário</p>
                    <Button>Agendar atendimento</Button>
                    <p className="text-xl font-light merriwather max-w-xs">As <strong className="merriwather font-bold">vagas</strong> para a análise são <strong className="merriwather font-bold">limitadas</strong> e podem encerrar a qualquer momento.</p>
                </div>
            </header>
            <main>
                <Section className="py-12 sm:py-24 text-center px-4">
                    <div className="flex flex-col gap-8 sm:gap-12 items-center">
                        <h2 className="text-4xl font-">A gestão de passivos vai:</h2>
                        <div className="w-full max-w-7xl flex justify-center flex-wrap gap-4 sm:gap-10">
                            <Card
                                imagePath="01"
                                title="Reduzir o valor da sua dívida"
                                subtitle={<>A redução de dívidas, em até <strong className="merriwather font-bold">90%</strong>, irá proporcionar uma segurança e tranquilidade na sua vida</>}
                            />
                            <Card
                                imagePath="02"
                                title="Alívio emocional"
                                subtitle={<>Você pode deixar de lado o estresse das cobranças constantes e as ameaças do banco. <strong className="merriwather font-bold">Assumimos o controle completo da sua negociação</strong>, cuidando de cada detalhe para que você não precise enfrentar essas pressões.</>}
                            />
                            <Card
                                imagePath="03"
                                title="Criar novas perspectivas"
                                subtitle={<>Com as finanças cuidadas por especialistas, <strong className="merriwather font-bold">você retomará a controle financeiro</strong> para buscar novos sonhos</>}
                            />
                        </div>
                        <div className="max-w-sm flex flex-col gap-12">
                            <hr className="border-[1.5px] border-[#0E0C07]" />
                            <h4 className="text-2xl">Tenha acesso a <strong>análise de passivos</strong> de um <strong>especialista</strong>:</h4>
                            <div className="w-full flex justify-center">
                                <Button>Agendar atendimento</Button>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="py-12 sm:py-24 bg-zinc-900 bg-1 px-4">
                    <div className="flex flex-col gap-12">
                        <h2 className="text-3xl sm:text-4xl text-white"><strong>Para quem é</strong> a gestão de passivos:</h2>
                        <ul className="flex flex-col gap-2">
                            <li className="relative ps-10">
                                <div className="absolute left-0 w-8 h-8">
                                    <Image
                                        src="/images/check.png"
                                        alt=""
                                        objectFit="contain"
                                        layout="fill"
                                    />
                                </div>
                                <p className="text-lg text-white">Pessoas que possuem dívidas acima de 80 mil reais</p>
                            </li>
                            <li className="relative ps-10">
                                <div className="absolute left-0 w-8 h-8">
                                    <Image
                                        src="/images/check.png"
                                        alt=""
                                        objectFit="contain"
                                        layout="fill"
                                    />
                                </div>
                                <p className="text-lg text-white">Pessoas que possuem dívidas em atraso</p>
                            </li>
                            <li className="relative ps-10">
                                <div className="absolute left-0 w-8 h-8">
                                    <Image
                                        src="/images/check.png"
                                        alt=""
                                        objectFit="contain"
                                        layout="fill"
                                    />
                                </div>
                                <p className="text-lg text-white">Pessoas que buscam uma solução definitiva</p>
                            </li>
                            <li className="relative ps-10">
                                <div className="absolute left-0 w-8 h-8">
                                    <Image
                                        src="/images/check.png"
                                        alt=""
                                        objectFit="contain"
                                        layout="fill"
                                    />
                                </div>
                                <p className="text-lg text-white">Pessoas que querem retomar o controle sem lidar com os bancos</p>
                            </li>
                        </ul>
                        <Button>Quero economizar impostos</Button>
                    </div>
                </Section>
                <Section classNameS="py-12 sm:py-24 bg-zinc-950 bg-2 px-4">
                    <div className="text-white flex flex-col gap-8 items-center">
                        <div className="max-w-xl flex flex-col items-center gap-4 text-center text-white">
                            <h4 className="text-2xl sm:text-3xl">A Kruger Toledo Advocacia é especialista em redução de dívidas</h4>
                            <p className="merriwather text-lg font-light">Reconhecimento dos nossos clientes:</p>
                            <div className="flex gap-2 items-center">
                                <Image
                                    src="/images/estrela.png"
                                    alt="Avaliação"
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src="/images/estrela.png"
                                    alt="Avaliação"
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src="/images/estrela.png"
                                    alt="Avaliação"
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src="/images/estrela.png"
                                    alt="Avaliação"
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src="/images/estrela.png"
                                    alt="Avaliação"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-8">
                            <h4 className="font-bold text-2xl sm:text-3xl text-center">O que dizem da Krüger Toledo</h4>
                            <div className="flex gap-4 sm:gap-6 flex-wrap flex-col sm:flex-row">
                                <Image
                                    alt="Avaliação Google"
                                    src="/images/avaliacao/01.png"
                                    width={350}
                                    height={232}
                                    objectFit="contain"
                                />
                                <Image
                                    alt="Avaliação Google"
                                    src="/images/avaliacao/02.png"
                                    width={350}
                                    height={232}
                                    objectFit="contain"
                                />
                                <Image
                                    alt="Avaliação Google"
                                    src="/images/avaliacao/03.png"
                                    width={350}
                                    height={232}
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
                <section>
                    <div className="sm:grid sm:grid-cols-2 gap-4 sm:gap-8 flex flex-col px-4 py-4 sm:py-0">
                        <div className='relative sm:h-full sm:w-full w-full h-[16em]'>
                            <Image
                                src="/images/dividas/kruger-toledo.png.png"
                                alt="Logo Kruger Toledo Advocacia"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="sm:py-24 flex flex-col gap-4 sm:gap-8 max-w-xl">
                            <h1 className="text-2xl sm:text-3xl">Quem é a <strong>Kruger Toledo Advocacia</strong>?</h1>
                            <div className="flex flex-col gap-4">
                                <p className="text-lg merriwather">A <strong className='merriwather'>Kruger Toledo Advocacia</strong> é um escritório especializado em gestão de passivos e redução de dívidas bancárias. Nossa missão é oferecer <strong className='merriwather'>soluções jurídicas seguras e eficazes</strong> para quem busca <strong className='merriwather'>retomar o controle financeiro</strong></p>
                                <p className="text-lg merriwather">Com uma equipe experiente, atuamos com transparência e estratégia para alcançar os <strong className='merriwather'>melhores resultados em negociações</strong> complexas, <strong className='merriwather'>reduzindo os valores das dívidas de forma significativa</strong> e trazendo tranquilidade e estabilidade para nossos clientes.</p>
                            </div>
                            <Button>Agendar análise de passivos</Button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='bg-gradient-to-r from-[#05081B] to-[#2A3162] py-8 flex justify-center items-center text-white'>
                <div className="flex justify-between items-center w-full max-w-3xl flex-col sm:flex-row gap-6 sm:gap-0">
                    <div className="relative w-[124px] h-[48px]">
                        <Image
                            src="/images/logokruger.png"
                            alt="Logo Kruger Toledo Advocacia"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <p>© Todos os direitos reservados</p>
                </div>
            </footer>
        </>
    )
}