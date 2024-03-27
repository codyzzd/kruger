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
        className="text-white "
        style={{
          backgroundImage: 'url("/images/maocaneta.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="container flex flex-col items-center justify-center p-8 py-16 mx-auto space-y-16 ">
          <Image
            className=""
            src="/images/logokruger.png"
            width={150}
            height={40}
            alt="Logo Kruger Advocacia"
          />
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-3xl md:text-4xl md:w-10/12 lg:w-[80%] lg:text-5xl ss4">
                Com a ajuda de um advogado bancário é possível reduzir suas
                dívidas
              </h1>
              <h2 className="text-lg md:px-20 lg:text-xl lg:px-48">
                Tentar renegociar seus contratos com o gerente não vai resolver
                seu problema
              </h2>
            </div>
            <hr className="border-t-[1px] border-orange-500 h-[1px] md:w-1/2 w-full"></hr>
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

          {/* <div
            className="self-end w-full h-96 md:h-full"
            style={{
              backgroundImage: 'url("/images/homemtriste.avif")',
              backgroundSize: "contain",
              backgroundPosition: "bottom center",
              backgroundRepeat: "no-repeat",
            }}></div> */}
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
          <h2 className="text-2xl text-center md:text-3xl lg:text-4xl ss4">
            Saiba mais sobre a ação revisional
          </h2>
          {/* <iframe
            src="https://www.youtube.com/embed/HxLWk3tSgaA?rel=0&modestbranding=1"
            frameBorder="0"
            allowFullScreen
            className="aspect-video w-full h-[190px] md:h-[400px] lg:w-[700px]"
          /> */}

          <video
            width="320"
            height="240"
            controls
            preload="auto"
            className="md:w-3/4">
            <source src="/videos/acaorevisional.mp4" type="video/mp4" />
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
        <div className="container flex flex-col items-center justify-center p-8 mx-auto space-y-8 md:py-16">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-2xl text-center md:text-3xl lg:text-4xl ss4">
              Passo a passo para revisar seus contratos
            </h2>
            <h3 className="text-lg lg:text-xl">
              E como funciona a Ação revisional?
            </h3>
          </div>
          <div className="flex flex-col md:flex-wrap md:flex-row md:justify-center [&>div]:p-6 [&>div]:border-[1px] [&>div]:border-orange-500 [&>div]:rounded-2xl [&>div]:space-y-2  [&_h4]:text-xl [&_h4]:font-bold gap-6 ">
          {/* <div className="grid grid-cols-1 grid-rows-[min-content,min-content,min-content,min-content,min-content] lg:grid-cols-3 lg:grid-rows-2 [&>div]:p-6 [&>div]:border-[1px] [&>div]:border-orange-500 [&>div]:rounded-2xl [&>div]:space-y-2  [&_h4]:text-xl [&_h4]:font-bold gap-6 "> */}
            <div className="md:w-[30%]">
              <h4>1. Relato pessoal</h4>
              <p>
                Ao entrar em contato com o advogado especialista, é necessário
                explicar como iniciaram as dívidas e os desdobramentos ocorridos
                até a situação atual.
              </p>
            </div>
            <div className="md:w-[30%]">
              <h4>2. Análise documental</h4>
              <p>
                É necessário avaliar cuidadosamente os contratos em busca de
                irregularidades ou práticas abusivas, através de profissionais
                especializados no assunto.
              </p>
            </div>
            <div className="md:w-[30%]">
              <h4>3. Elaboração de petição inicial</h4>
              <p>
                A petição inicial é onde todos os argumentos e razões pelas
                quais os contratos devem ter suas condições alteradas.
              </p>
            </div>
            <div className="md:w-[40%] lg:w-[30%]">
              <h4>4. Fase judicial</h4>
              <p>
                Durante o processo os integrantes apresentam suas alegações e as
                informações necessárias para o julgamento ocorrer.
              </p>
            </div>
            <div className="md:w-[40%] lg:w-[30%]">
              <h4>5. Sentença</h4>
              <p>
                Na sentença é onde o juiz vai decidir qual será o valor final da
                dívida com base em todas informações apresentadas durante o
                processo.
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
              alt="Whatsapp Icon"
              className=" max-h-[40px] max-w-[40px]"
            />

            <p className="px-4 py-2 text-white transition-all bg-green-600 hover:text-green-600 hover:bg-white">
              Fale com um advogado especialista
            </p>
          </Link>
          <hr className="border-t-[1px] border-orange-500 h-[1px] md:w-1/2 w-full"></hr>
          <div className="p-6 space-y-2 text-center text-white bg-orange-500 rounded-2xl lg:w-1/2">
            <h4 className="text-2xl font-semibold lg:text-4xl ss4">
              Acordo com o banco
            </h4>
            <p className="lg:text-xl">
              Muitas vezes é possível negociar com o banco durante o processo e
              fazer um acordo extrajudicial com até 90% de desconto antes do fim
              do processo
            </p>
          </div>
        </div>
      </section>

      {/* bulletlist */}
      <section className="text-white bg-[#0A2136]">
        <div className="container flex flex-col items-center p-8 mx-auto space-y-8 ">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-2xl text-center md:text-3xl lg:text-4xl ss4">
              Veja os casos que podemos lhe ajudar
            </h2>
            <h3 className="text-lg lg:text-xl">Dívidas que podemos reduzir</h3>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 ">
            <div className="flex flex-row gap-4 font-bold uppercase">
              <Image
                src="/images/ok.png"
                width={32}
                height={32}
                alt="Icone de OK Verde"
                className="w-[32px] h-[32px]"
              />
              <p className="text-lg">Revisão de DÍVIDA de cartão de crédito</p>
            </div>
            <div className="flex flex-row gap-4 font-bold uppercase">
              <Image
                src="/images/ok.png"
                width={32}
                height={32}
                alt="Icone de OK Verde"
                className="w-[32px] h-[32px]"
              />
              <p className="text-lg">Revisão de DÍVIDA de cheque especial</p>
            </div>
            <div className="flex flex-row gap-4 font-bold uppercase">
              <Image
                src="/images/ok.png"
                width={32}
                height={32}
                alt="Icone de OK Verde"
                className="w-[32px] h-[32px]"
              />
              <p className="text-lg">
                Revisão de contrato de empréstimo pessoal
              </p>
            </div>
            <div className="flex flex-row gap-4 font-bold uppercase">
              <Image
                src="/images/ok.png"
                width={32}
                height={32}
                alt="Icone de OK Verde"
                className="w-[32px] h-[32px]"
              />
              <p className="text-lg">Revisão de contrato de conta garantida</p>
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
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl ss4">
                Quem Somos?
              </h2>
              <p className="lg:text-lg">
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
          <h2 className="mb-2 text-2xl font-bold text-center md:text-4xl ss4">
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
