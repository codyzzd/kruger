import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Golpe do Pix",
  description:
    "Krüger Advocacia: Recupere seu dinheiro perdido no golpe do Pix com a ajuda de nossos advogados especializados em direito bancário. Oferecemos assistência desde a coleta de provas até a obtenção da sentença favorável. Fale agora com um advogado e veja como podemos ajudar você a reaver seus valores. Conte com a nossa experiência e compromisso. Todos os direitos reservados.",
};

export default function Home() {
  return (
    <>
      {/* hero */}
      <section
        className="text-white md:overflow-hidden"
        style={{
          backgroundImage: 'url("/images/fundohero.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="container grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1   mx-auto  lg:h-[80vh]  ">
          <div className="flex flex-col justify-center px-8 conteudo md:py-16">
            <Image
              className="mb-16"
              src="/images/logokruger.png"
              width={150}
              height={40}
              alt="Logo Kruger Advocacia"
            />
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">
              Recupere seu dinheiro perdido no golpe do pix
            </h1>
            <h2 className="text-lg ">
              Através da nossa metodologia é possível recuperar os valores
              perdidos. Não fique no prejuízo!
            </h2>
            <hr className="my-8 border-t-2 border-orange-500"></hr>
            <Link
              href="https://wa.me/+556181401978/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
              className="flex flex-row space-x-4">
              <Image
                src="/images/whatsapp.png"
                width={40}
                height={40}
                alt="Whatsapp Icon"
                className=" max-h-[40px] max-w-[40px]"
              />

              <p className="px-4 py-2 text-white transition-all bg-green-600 hover:text-green-600 hover:bg-white">
                Fale agora com um advogado
              </p>
            </Link>
          </div>

          <div
            className="h-96 w-full self-end md:h-full"
            style={{
              backgroundImage: 'url("/images/homemtriste.avif")',
              backgroundSize: "contain",
              backgroundPosition: "bottom center",
              backgroundRepeat: "no-repeat",
            }}></div>
          {/* <div id="photo" className="items-end px-8 md:w-full md:flex ">
            <Image
              src="/images/homemtriste.png"
              width={715}
              height={930}
              alt="Homem com a mão na cara triste de camisa comprida azul escuro"
              quality={50}
              className=" md:h-[600px] md:min-w-fit"
            />
          </div> */}
        </div>
      </section>

      {/* video */}
      <section className="text-white bg-[#0A2136]">
        <div className="container flex flex-col items-center justify-center p-8 mx-auto space-y-8 md:py-16">
          <h2 className="mb-3 text-2xl font-bold text-center md:text-4xl">
            Veja mais sobre como podemos te ajudar:
          </h2>
          <iframe
            src="https://www.youtube.com/watch?v=gfU1iZnjRZM"
            frameBorder="0"
            allowFullScreen
          />

          <video
            width="320"
            height="240"
            controls
            preload="auto"
            className="md:w-3/4">
            <source src="/videos/golpedopix.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Link
            href="https://wa.me/+556181401978/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
            className="flex flex-row space-x-4 ">
            <Image
              src="/images/whatsapp.png"
              width={40}
              height={40}
              alt="Whatsapp Icon"
              className=" max-h-[40px] max-w-[40px]"
            />

            <p className="px-4 py-2 text-white transition-all bg-green-600 hover:text-green-600 hover:bg-white">
              Fale com um advogado
            </p>
          </Link>
        </div>
      </section>

      {/* etapas */}
      <section className="text-white bg-[#022442] ">
        <div className="container flex flex-col items-center justify-center p-8 mx-auto md:py-16">
          <h2 className="mb-2 text-2xl font-bold text-center md:text-4xl">
            Ajudaremos você do início ao fim do processo!
          </h2>
          <h3 className="mb-6 text-base">Quais serão as etapas?</h3>

          {/* etapas desktop para frente */}
          <div className="hidden lg:block">
            <div className="grid grid-rows-1 grid-cols-[22px,1fr,22px,1fr,22px,1fr,22px,1fr,22px,1fr,22px,1fr] [&>div]:self-end">
              <div className="col-span-2 col-start-3">
                <h4 className="mb-2 text-xl font-bold">
                  2. Fazer um Boletim de ocorrência
                </h4>
                <p className="">
                  Faça um BO online, você deve adicionar o máximo de informações
                  sobre o crime ocorrido, como a sua conta bancária, o valor
                  enviado, a conta que recebeu o valor.
                </p>
              </div>

              <div className="col-span-2 col-start-7">
                <h4 className="mb-2 text-xl font-bold">4. Petição Inicial</h4>
                <p className="">
                  Essa petição dá início ao processo judicial, nela apresentamos
                  todos os fatos ocorridos ao juiz juntamente com nossos
                  pedidos.
                </p>
              </div>

              <div className="col-span-2 col-start-11">
                <h4 className="mb-2 text-xl font-bold">6. Sentença</h4>
                <p className="">
                  A sentença é onde o juiz vai decidir o que irá acontecer,
                  existem casos em que além da devolução dos valores perdidos
                  para os golpistas o banco é condenado a pagar danos morais
                  pelo transtorno causado.
                </p>
              </div>
            </div>

            <div className="grid grid-rows-1 grid-cols-[22px,1fr,22px,1fr,22px,1fr,22px,1fr,22px,1fr,22px,1fr] items-center my-4">
              <div className="w-[24px] h-[24px] rounded-full bg-orange-600"></div>
              <div className="w-full border-t-2 border-orange-600"></div>
              <div className="w-[24px] h-[24px] rounded-full bg-orange-600"></div>
              <div className="w-full border-t-2 border-orange-600"></div>
              <div className="w-[24px] h-[24px] rounded-full bg-orange-600"></div>
              <div className="w-full border-t-2 border-orange-600"></div>
              <div className="w-[24px] h-[24px] rounded-full bg-orange-600"></div>
              <div className="w-full border-t-2 border-orange-600"></div>
              <div className="w-[24px] h-[24px] rounded-full bg-orange-600"></div>
              <div className="w-full border-t-2 border-orange-600"></div>
              <div className="w-[24px] h-[24px] rounded-full bg-orange-600"></div>
              <div className="w-full border-t-2 border-orange-600"></div>
            </div>

            <div className="grid grid-rows-1 grid-cols-[22px,1fr,22px,1fr,22px,1fr,22px,1fr,22px,1fr,22px,1fr] ">
              <div className="col-span-2 col-start-1">
                <h4 className="mb-2 text-xl font-bold">
                  1. Entrar em contato com o seu banco
                </h4>
                <p className="">
                  Você deve entrar em contato com o seu banco e solicitar o MED
                  (Mecanismo especial de devolução), aconselhamos fazer por meio
                  do próprio aplicativo.
                </p>
              </div>

              <div className="col-span-2 col-start-5">
                <h4 className="mb-2 text-xl font-bold">
                  3. Coleta de provas da fraude
                </h4>
                <p className="">
                  Nesse momento iremos produzir provas que comprovem o seu
                  direito, como prints da fraude, comprovantes das
                  transferências, protocolos do banco etc.
                </p>
              </div>

              <div className="col-span-2 col-start-9">
                <h4 className="mb-2 text-xl font-bold">
                  5. Audiência de Instrução
                </h4>
                <p className="">
                  Nessa etapa iremos questionar o banco sobre pontos
                  importantíssimos para o curso do processo, produzindo provas
                  em nosso favor.
                </p>
              </div>
            </div>
          </div>

          {/* etapas até tablet */}
          <div className="md:mx-32 lg:hidden">
            <div className="flex gap-x-4">
              <div className="flex flex-col items-center justify-center w-22">
                <div className="w-[20px] h-[24px] rounded-full bg-orange-600"></div>
                <div className="h-full border-l-2 border-orange-600"></div>
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">
                  1. Entrar em contato com o seu banco
                </h4>
                <p className="mb-6">
                  Você deve entrar em contato com o seu banco e solicitar o MED
                  (Mecanismo especial de devolução), aconselhamos fazer por meio
                  do próprio aplicativo.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="flex flex-col items-center justify-center w-22 ">
                <div className="w-[20px] h-[24px] rounded-full bg-orange-600"></div>
                <div className="h-full border-l-2 border-orange-600"></div>
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">
                  2. Fazer um Boletim de ocorrência
                </h4>
                <p className="mb-6">
                  Faça um BO online, você deve adicionar o máximo de informações
                  sobre o crime ocorrido, como a sua conta bancária, o valor
                  enviado, a conta que recebeu o valor.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="flex flex-col items-center justify-center w-22">
                <div className="w-[20px] h-[24px] rounded-full bg-orange-600"></div>
                <div className="h-full border-l-2 border-orange-600"></div>
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">
                  3. Coleta de provas da fraude
                </h4>
                <p className="mb-6">
                  Nesse momento iremos produzir provas que comprovem o seu
                  direito, como prints da fraude, comprovantes das
                  transferências, protocolos do banco etc.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="flex flex-col items-center justify-center w-22">
                <div className="w-[20px] h-[24px] rounded-full bg-orange-600"></div>
                <div className="h-full border-l-2 border-orange-600"></div>
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">4. Petição Inicial</h4>
                <p className="mb-6">
                  Essa petição dá início ao processo judicial, nela apresentamos
                  todos os fatos ocorridos ao juiz juntamente com nossos
                  pedidos.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="flex flex-col items-center justify-center w-22">
                <div className="w-[20px] h-[24px] rounded-full bg-orange-600"></div>
                <div className="h-full border-l-2 border-orange-600"></div>
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">
                  5. Audiência de Instrução
                </h4>
                <p className="mb-6">
                  Nessa etapa iremos questionar o banco sobre pontos
                  importantíssimos para o curso do processo, produzindo provas
                  em nosso favor.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="flex flex-col items-center justify-start w-22">
                <div className="w-[20px] h-[20px] rounded-full bg-orange-600"></div>
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">6. Sentença</h4>
                <p className="mb-6">
                  A sentença é onde o juiz vai decidir o que irá acontecer,
                  existem casos em que além da devolução dos valores perdidos
                  para os golpistas o banco é condenado a pagar danos morais
                  pelo transtorno causado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* bulletlist */}
      <section className="text-white bg-[#0A2136]">
        <div className="container p-8 mx-auto space-y-8 md:py-16 ">
          <h2 className="mb-3 text-2xl font-bold text-center md:text-4xl">
            Veja os casos que podemos lhe ajudar:
          </h2>
          <div
            id="listas"
            className="space-y-8 md:flex md:flex-row  md:[&>div]:w-1/2 md:space-y-0 md:space-x-8 md:px-24 lg:px-48 ">
            <div id="bom">
              <div className="flex flex-row items-center mb-4 space-x-4">
                <Image
                  src="/images/ok.png"
                  width={40}
                  height={40}
                  alt="OK Verde"
                />
                <h3 className="text-xl font-bold ">Para quem serve:</h3>
              </div>
              <ul className="[&>li]:text-white [&>li]:w-full [&>li]:bg-orange-500 [&>li]:p-4 space-y-4 font-bold">
                <li>Golpe do Falso Parente</li>
                <li>
                  Golpe do Falso Gerente Bancário / Central de Atendimento
                </li>
                <li>Golpe do WhatsApp</li>
                <li>Golpe do Produto ou da Loja Falsa</li>
                <li>Golpe da Rede Social Hackeada</li>
                <li>Golpe do Falso Investimento</li>
              </ul>
            </div>
            <div id="mal">
              <div className="flex flex-row items-center mb-4 space-x-4">
                <Image
                  src="/images/close.png"
                  width={40}
                  height={40}
                  alt="Cruz Vermelha"
                />
                <h3 className="text-xl font-bold">Para quem serve:</h3>
              </div>
              <ul className="[&>li]:text-white [&>li]:w-full [&>li]:bg-orange-500 [&>li]:p-4 space-y-4 font-bold">
                <li>Golpe Abaixo de R$ 3.000,00</li>
                <li>Reaver Pix Realizado sem Existência de Golpe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="text-white bg-[#022442]">
        <div className="container p-8 mx-auto space-y-8 md:space-y-0 md:flex md:flex-row md:py-16 md:space-x-8 ">
          <div
            className="min-w-full md:w-1/2 md:min-w-fit min-h-64"
            style={{
              backgroundImage: 'url("/images/ceo.avif")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>

          <div className="space-y-8 conteudo md:w-1/2">
            <div>
              <h2 className="mb-3 text-2xl font-bold md:text-4xl">
                Quem Somos?
              </h2>
              <p>
                O escritório Kruger Toledo Advocacia é um escritório
                especializado em direito bancário, comprometido em valorizar seu
                dinheiro da forma que você merece. Buscamos os melhores ganhos
                possíveis através de uma assessoria individualizada. Destacamos
                alguns diferenciais que contribuirão para o sucesso do seu
                processo:
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2  lg:grid-cols-4 lg:grid-rows-1 [&>div]:text-center [&>div]:space-y-4 lg:divide-x divide-orange-500 gap-8 lg:gap-0 [&>div]:lg:p-4">
              <div className="flex flex-col items-center ">
                <Image
                  src="/images/hammer.webp"
                  width={200}
                  height={200}
                  alt="Icone de Martelo"
                  className="w-3/5 md:w-2/5"
                />
                <p>Especialistas em Direito Bancário</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src="/images/fone.webp"
                  width={200}
                  height={200}
                  alt="Icone de Headset"
                  className="w-3/5 md:w-2/5"
                />
                <p>Atendimento Humanizado</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src="/images/certok.webp"
                  width={200}
                  height={200}
                  alt="Icone de OK"
                  className="w-3/5 md:w-2/5"
                />
                <p>Profissionais Capacitados</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src="/images/user.webp"
                  width={200}
                  height={200}
                  alt="Icone de Usuário"
                  className="w-3/5 md:w-2/5"
                />
                <p>Clientes Satisfeitos</p>
              </div>
            </div>
            <div className="flex flex-row justify-center md:justify-start">
              <Link
                href="https://wa.me/+556181401978/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
                className="flex flex-row space-x-4">
                <Image
                  src="/images/whatsapp.png"
                  width={40}
                  height={40}
                  alt="Icone de Usuário"
                  className=" max-h-[40px] max-w-[40px]"
                />

                <p className="px-4 py-2 text-white transition-all bg-green-600 hover:text-green-600 hover:bg-white">
                  Conte com a nossa ajuda!
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* depo */}
      <section className="text-white bg-[#0A2136]">
        <div className="container flex flex-col items-center p-8 mx-auto space-y-8 md:py-16">
          <div className="flex space-x-2">
            <Image
              className=""
              src="/images/star.png"
              width={32}
              height={32}
              alt="Estrela Amarela"
            />
            <Image
              className=""
              src="/images/star.png"
              width={32}
              height={32}
              alt="Logo Kruger Advocacia"
            />
            <Image
              className=""
              src="/images/star.png"
              width={32}
              height={32}
              alt="Logo Kruger Advocacia"
            />
            <Image
              className=""
              src="/images/star.png"
              width={32}
              height={32}
              alt="Logo Kruger Advocacia"
            />
            <Image
              className=""
              src="/images/star.png"
              width={32}
              height={32}
              alt="Logo Kruger Advocacia"
            />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-center md:text-4xl">
            O que dizem da Advocacia Krüger Toledo?
          </h2>

          {/* grid de 1 para 2 colunas */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:hidden">
            <ul className="space-y-4 [&>li]:bg-[#142157]">
              <li>
                <div className="p-4">
                  <Image
                    src="/images/googlelogo.webp"
                    width={40}
                    height={40}
                    alt="Icone do logo da Google"
                    className="mb-3"
                  />
                  <p className="text-xl font-bold">Cinthia Rocha</p>
                  <p className="text-sm leading-relaxed">
                    Depois de mais de um ano procurando um advogado (a) que
                    tivesse conhecimento, disposição e competência para assumir
                    o meu caso, que por sinal é bastante complexo, encontrei o
                    escritório “Krüger Toledo Advocacia”, por meio de um vídeo
                    da Dra. Esther no Instagram oferecendo exatamente o que eu
                    precisava. E, para minha grata surpresa, me deparei com um
                    Escritório altamente moderno e dotado de todos o. Me senti
                    bastante segura a condução dos trabalhos e mesmo sendo
                    processos novos já pude verificar êxito em várias etapas. Só
                    tenho a agradecer pela forma, celeridade e competência com
                    que estão conduzindo meus pleitos. Muito obrigada!
                  </p>
                </div>
              </li>

              <li className="">
                <div className="p-4">
                  <Image
                    src="/images/googlelogo.webp"
                    width={40}
                    height={40}
                    alt="Icone do logo da Google"
                    className="mb-3"
                  />
                  <p className="text-xl font-bold">Cheila Almeida</p>
                  <p className="text-sm leading-relaxed">
                    Competência, profissionalismo e muita empatia foi o que
                    encontrei na Krüger e Toledo Advocacia. Como se tratava de
                    um contato via rede social fiquei receosa no início, contudo
                    o atendimento da Dra. Esther e sua equipe dissipou toda
                    minha insegurança. Cheguei fragilizada e desesperançosa.
                    Recebi atenção, acolhimento e de forma periódica todas as
                    informações do meu processo. Depois de 1 mês já tivemos uma
                    importante vitória na ação, que sinceramente, eu até
                    duvidava. Só prova a eficiência e seriedade do trabalho
                    desenvolvido por eles. Fica aqui meu obrigado a Krüger e
                    Toledo e também minha indicação a quem busca resolver alguma
                    demanda judicial.
                  </p>
                </div>
              </li>
            </ul>

            <ul className="space-y-4 [&>li]:bg-[#142157]">
              <li>
                <div className="p-4">
                  <Image
                    src="/images/googlelogo.webp"
                    width={40}
                    height={40}
                    alt="Icone do logo da Google"
                    className="mb-3"
                  />
                  <p className="text-xl font-bold">Aline Romano</p>
                  <p className="text-sm leading-relaxed">
                    Conheci o escritório por meio de um anúncio nas redes
                    sociais. Desde o início tive todas as minhas dúvidas sanadas
                    com atenção e dedicação. Após assinatura do contrato, a
                    postura do escritório permaneceu a mesma para melhor, sempre
                    trabalhando com total empenho na minha causa, peticionando
                    junto ao judiciário de forma rápida e eficaz e garantindo a
                    concessão de liminar em tempo absurdamente rápido! Se trata
                    de toda uma equipe especializada trabalhando na minha causa.
                    Só tenho elogios.
                  </p>
                </div>
              </li>

              <li>
                <div className="p-4">
                  <Image
                    src="/images/googlelogo.webp"
                    width={40}
                    height={40}
                    alt="Icone do logo da Google"
                    className="mb-3"
                  />
                  <p className="text-xl font-bold">Ronald Silva</p>
                  <p className="text-sm leading-relaxed">
                    Os advogados da Kruger Toledo Advocacia estão entre os mais
                    sérios que já contratei. Minha experiência foi incrível.
                    Tudo que precisei foi alcançado, graças ao profissionalismo
                    e compromisso da Dra Esther e equipe. Eles dão todo o
                    suporte on-line. As documentações, contratos, dúvidas que
                    surgem ao longo dos processos, e outras demandas… todas
                    foram tratadas pelo WhatsApp sem nenhum problema. Isso é um
                    grande diferencial, haja vista, não termos tempo de ficar
                    nos deslocando até o escritório. Avalio como muito positiva
                    minha experiência com o escritório e recomendo o trabalho
                    deles. Parabéns a Dra Esther, pelo compromisso que tem com
                    seus clientes e pela responsabilidade com que trata as
                    nossas causas.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* grid para 4 colunas */}
          <div className="hidden xl:block">
            <ul className="[&>li]:bg-[#142157] grid grid-cols-4 gap-4 [&>li]:h-fit">
              <li>
                <div className="p-4">
                  <Image
                    src="/images/googlelogo.webp"
                    width={40}
                    height={40}
                    alt="Icone do logo da Google"
                    className="mb-3"
                  />
                  <p className="text-xl font-bold">Cinthia Rocha</p>
                  <p className="text-sm leading-relaxed">
                    Depois de mais de um ano procurando um advogado (a) que
                    tivesse conhecimento, disposição e competência para assumir
                    o meu caso, que por sinal é bastante complexo, encontrei o
                    escritório “Krüger Toledo Advocacia”, por meio de um vídeo
                    da Dra. Esther no Instagram oferecendo exatamente o que eu
                    precisava. E, para minha grata surpresa, me deparei com um
                    Escritório altamente moderno e dotado de todos o. Me senti
                    bastante segura a condução dos trabalhos e mesmo sendo
                    processos novos já pude verificar êxito em várias etapas. Só
                    tenho a agradecer pela forma, celeridade e competência com
                    que estão conduzindo meus pleitos. Muito obrigada!
                  </p>
                </div>
              </li>

              <li className="">
                <div className="p-4">
                  <Image
                    src="/images/googlelogo.webp"
                    width={40}
                    height={40}
                    alt="Icone do logo da Google"
                    className="mb-3"
                  />
                  <p className="text-xl font-bold">Cheila Almeida</p>
                  <p className="text-sm leading-relaxed">
                    Competência, profissionalismo e muita empatia foi o que
                    encontrei na Krüger e Toledo Advocacia. Como se tratava de
                    um contato via rede social fiquei receosa no início, contudo
                    o atendimento da Dra. Esther e sua equipe dissipou toda
                    minha insegurança. Cheguei fragilizada e desesperançosa.
                    Recebi atenção, acolhimento e de forma periódica todas as
                    informações do meu processo. Depois de 1 mês já tivemos uma
                    importante vitória na ação, que sinceramente, eu até
                    duvidava. Só prova a eficiência e seriedade do trabalho
                    desenvolvido por eles. Fica aqui meu obrigado a Krüger e
                    Toledo e também minha indicação a quem busca resolver alguma
                    demanda judicial.
                  </p>
                </div>
              </li>

              <li>
                <div className="p-4">
                  <Image
                    src="/images/googlelogo.webp"
                    width={40}
                    height={40}
                    alt="Icone do logo da Google"
                    className="mb-3"
                  />
                  <p className="text-xl font-bold">Aline Romano</p>
                  <p className="text-sm leading-relaxed">
                    Conheci o escritório por meio de um anúncio nas redes
                    sociais. Desde o início tive todas as minhas dúvidas sanadas
                    com atenção e dedicação. Após assinatura do contrato, a
                    postura do escritório permaneceu a mesma para melhor, sempre
                    trabalhando com total empenho na minha causa, peticionando
                    junto ao judiciário de forma rápida e eficaz e garantindo a
                    concessão de liminar em tempo absurdamente rápido! Se trata
                    de toda uma equipe especializada trabalhando na minha causa.
                    Só tenho elogios.
                  </p>
                </div>
              </li>

              <li>
                <div className="p-4">
                  <Image
                    src="/images/googlelogo.webp"
                    width={40}
                    height={40}
                    alt="Icone do logo da Google"
                    className="mb-3"
                  />
                  <p className="text-xl font-bold">Ronald Silva</p>
                  <p className="text-sm leading-relaxed">
                    Os advogados da Kruger Toledo Advocacia estão entre os mais
                    sérios que já contratei. Minha experiência foi incrível.
                    Tudo que precisei foi alcançado, graças ao profissionalismo
                    e compromisso da Dra Esther e equipe. Eles dão todo o
                    suporte on-line. As documentações, contratos, dúvidas que
                    surgem ao longo dos processos, e outras demandas… todas
                    foram tratadas pelo WhatsApp sem nenhum problema. Isso é um
                    grande diferencial, haja vista, não termos tempo de ficar
                    nos deslocando até o escritório. Avalio como muito positiva
                    minha experiência com o escritório e recomendo o trabalho
                    deles. Parabéns a Dra Esther, pelo compromisso que tem com
                    seus clientes e pela responsabilidade com que trata as
                    nossas causas.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 [&>div]:bg-[#142157] hidden">
            <div className="p-4">
              <Image
                src="/images/googlelogo.webp"
                width={40}
                height={40}
                alt="Icone do logo da Google"
                className="mb-3"
              />
              <p className="text-xl font-bold">Cinthia Rocha</p>
              <p className="text-sm leading-relaxed">
                Depois de mais de um ano procurando um advogado (a) que tivesse
                conhecimento, disposição e competência para assumir o meu caso,
                que por sinal é bastante complexo, encontrei o escritório
                “Krüger Toledo Advocacia”, por meio de um vídeo da Dra. Esther
                no Instagram oferecendo exatamente o que eu precisava. E, para
                minha grata surpresa, me deparei com um Escritório altamente
                moderno e dotado de todos o. Me senti bastante segura a condução
                dos trabalhos e mesmo sendo processos novos já pude verificar
                êxito em várias etapas. Só tenho a agradecer pela forma,
                celeridade e competência com que estão conduzindo meus pleitos.
                Muito obrigada!
              </p>
            </div>
            <div className="p-4 ">
              <Image
                src="/images/googlelogo.webp"
                width={40}
                height={40}
                alt="Icone do logo da Google"
                className="mb-3"
              />
              <p className="text-xl font-bold">Cheila Almeida</p>
              <p className="text-sm leading-relaxed">
                Competência, profissionalismo e muita empatia foi o que
                encontrei na Krüger e Toledo Advocacia. Como se tratava de um
                contato via rede social fiquei receosa no início, contudo o
                atendimento da Dra. Esther e sua equipe dissipou toda minha
                insegurança. Cheguei fragilizada e desesperançosa. Recebi
                atenção, acolhimento e de forma periódica todas as informações
                do meu processo. Depois de 1 mês já tivemos uma importante
                vitória na ação, que sinceramente, eu até duvidava. Só prova a
                eficiência e seriedade do trabalho desenvolvido por eles. Fica
                aqui meu obrigado a Krüger e Toledo e também minha indicação a
                quem busca resolver alguma demanda judicial.
              </p>
            </div>
            <div className="p-4">
              <Image
                src="/images/googlelogo.webp"
                width={40}
                height={40}
                alt="Icone do logo da Google"
                className="mb-3"
              />
              <p className="text-xl font-bold">Aline Romano</p>
              <p className="text-sm leading-relaxed">
                Conheci o escritório por meio de um anúncio nas redes sociais.
                Desde o início tive todas as minhas dúvidas sanadas com atenção
                e dedicação. Após assinatura do contrato, a postura do
                escritório permaneceu a mesma para melhor, sempre trabalhando
                com total empenho na minha causa, peticionando junto ao
                judiciário de forma rápida e eficaz e garantindo a concessão de
                liminar em tempo absurdamente rápido! Se trata de toda uma
                equipe especializada trabalhando na minha causa. Só tenho
                elogios.
              </p>
            </div>
            <div className="p-4">
              <Image
                src="/images/googlelogo.webp"
                width={40}
                height={40}
                alt="Icone do logo da Google"
                className="mb-3"
              />
              <p className="text-xl font-bold">Ronald Silva</p>
              <p className="text-sm leading-relaxed">
                Os advogados da Kruger Toledo Advocacia estão entre os mais
                sérios que já contratei. Minha experiência foi incrível. Tudo
                que precisei foi alcançado, graças ao profissionalismo e
                compromisso da Dra Esther e equipe. Eles dão todo o suporte
                on-line. As documentações, contratos, dúvidas que surgem ao
                longo dos processos, e outras demandas… todas foram tratadas
                pelo WhatsApp sem nenhum problema. Isso é um grande diferencial,
                haja vista, não termos tempo de ficar nos deslocando até o
                escritório. Avalio como muito positiva minha experiência com o
                escritório e recomendo o trabalho deles. Parabéns a Dra Esther,
                pelo compromisso que tem com seus clientes e pela
                responsabilidade com que trata as nossas causas.
              </p>
            </div>
          </div>
          <Link
            href="https://wa.me/+556181401978/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
            className="flex flex-row space-x-4 ">
            <Image
              src="/images/whatsapp.png"
              width={40}
              height={40}
              alt="Icone de Usuário"
              className=" max-h-[40px] max-w-[40px]"
            />

            <p className="px-4 py-2 text-white transition-all bg-green-600 hover:text-green-600 hover:bg-white">
              Fale agora com um advogado
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
