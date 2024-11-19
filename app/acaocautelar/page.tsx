import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Popup } from "../components/popup";

export const metadata: Metadata = {
  title: "Ação Cautelar",
  description: "xxx.",
};

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* nav */}
      <section>
        <nav className="container flex justify-center px-8 py-4 mx-auto ">
          <Image
            src="/images/logokrugerblack.webp"
            width={254}
            height={104}
            alt="Logo da Krüger Toledo Advocacia"
            className="w-auto h-12"
          />
        </nav>
      </section>

      {/* hero */}
      <section
        style={{
          backgroundImage: 'url("/images/fundohero.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-32 md:py-16">
        <div className="container flex flex-col items-center justify-center h-full p-8 mx-auto text-center text-white  space-y-4 lg:px-64">
          <h1 className="text-4xl font-bold">
            Uma medida judicial para interromper o banco de pegar todo seu
            salário
          </h1>
          <hr className="w-10/12 border-orange-500"></hr>
          <p className="text-xl">
            Através da ação cautelar, você estará fazendo uma desautorização
            judicial para impedir que o banco desconte a maior parte do seu
            salário
          </p>
        </div>
      </section>

      {/* video */}
      <section className="text-black bg-white">
        <div className="container flex flex-col items-center justify-center p-8 mx-auto space-y-8 md:py-16">
          <h2 className="mb-3 text-2xl font-bold text-center md:text-4xl">
            Veja mais sobre a medida:
          </h2>
          {/* <iframe
            src="https://www.youtube.com/embed/ZiWHgEIhSmQ?rel=0&modestbranding=1"
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
            <source src="/videos/acaocautelar2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Link
            href="https://wa.me/+5551997570244/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
            className="flex flex-row space-x-4 ">
            <p className="px-4 py-2 text-white bg-orange-500 transition-all hover:text-orange-500 hover:bg-white">
              Como recuperar o meu salário!
            </p>
          </Link>
        </div>
      </section>

      {/* etapas */}
      <section className="text-white bg-[#070C26] ">
        <div className="container flex flex-col items-center justify-center p-8 mx-auto md:py-16">
          <h2 className="mb-2 text-2xl font-bold text-center md:text-4xl">
            Tire do banco o controle da sua vida!
          </h2>
          <h3 className="mb-6 text-base">E como funciona a Ação Cautelar?</h3>

          <div className="[&_h6]:font-bold [&_h6]:text-xl border-l-orange-500 border-s-[1px] space-y-8 py-8 lg:w-8/12">
            <div
              id="first_question"
              className="flex flex-row items-start space-x-2">
              <div className="flex flex-row items-center w-20 min-w-16">
                <hr className="w-full border-orange-500"></hr>
                <Image
                  src="/images/map.png"
                  width={32}
                  height={32}
                  alt="Pin de GPS Map"
                  className="w-auto "
                />
              </div>
              <div className="">
                <h6>1. Petição inicial com pedido de Tutela de Urgência:</h6>
                <p>
                  Você está solicitando ao juiz uma decisão rápida para parar
                  imediatamente esses descontos indevidos.
                </p>
              </div>
            </div>

            <div
              id="second_question"
              className="flex flex-row items-start space-x-2">
              <div className="flex flex-row items-center w-20 min-w-16">
                <hr className="w-full border-orange-500"></hr>
                <Image
                  src="/images/map.png"
                  width={32}
                  height={32}
                  alt="Pin de GPS Map"
                  className="w-auto "
                />
              </div>
              <div className="">
                <h6>2. Apresentação de documentos e alegações das partes:</h6>
                <p>
                  Nessa etapa os integrantes do processo apresentam as
                  documentações relevantes e o juiz pode solicitar mais
                  informações.
                </p>
              </div>
            </div>

            <div
              id="third_question"
              className="flex flex-row items-start space-x-2">
              <div className="flex flex-row items-center w-20 min-w-16">
                <hr className="w-full border-orange-500"></hr>
                <Image
                  src="/images/map.png"
                  width={32}
                  height={32}
                  alt="Pin de GPS Map"
                  className="w-auto "
                />
              </div>
              <div className="">
                <h6>3. Sentença:</h6>
                <p>
                  A sentença é o momento em que o juiz vai decidir
                  definitivamente sobre os descontos. Existem casos em que o
                  banco é condenado a pagar danos morais em favor do servidor.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="https://wa.me/+5551997570244/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
            className="flex flex-row space-x-4 ">
            <p className="px-4 py-2 text-white bg-orange-500 transition-all hover:text-orange-500 hover:bg-white">
              Conte com nossa ajuda!
            </p>
          </Link>
        </div>
      </section>

      {/* cta chance */}
      <section className="text-black bg-white ">
        <div className="container flex flex-col items-center justify-center p-8 mx-auto md:py-16 space-y-4 lg:px-32">
          <h2 className="mb-3 text-2xl font-bold text-center md:text-4xl">
            Faça uma análise com um profissional!
          </h2>
          <p className="text-2xl text-center">
            Envie seu último contracheque e extrato de conta corrente com
            descontos para avaliarmos a possibilidade de ajuizamento da ação.
          </p>

          <Link
            href="https://wa.me/+5551997570244/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
            className="flex flex-row space-x-4 ">
            <p className="px-4 py-2 text-white bg-orange-500 transition-all hover:text-orange-500 hover:bg-white">
              Quero fazer a análise!
            </p>
          </Link>
        </div>
      </section>

      {/* bulletlist */}
      <section className="text-white bg-[#0A2136]">
        <div className="container p-8 mx-auto space-y-8 md:py-16 ">
          <h2 className="mb-3 text-2xl font-bold text-center md:text-4xl">
            Entenda se a Ação Cautelar serve para você:
          </h2>
          <div
            id="listas"
            className="space-y-8 md:flex md:flex-row  md:space-y-0 md:space-x-8 lg:px-24">
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
              <ul className="[&>li]:text-white [&>li]:w-full [&>li]:bg-orange-500 [&>li]:p-4 space-y-4 ">
                <li>
                  <strong>Pessoas com descontos em conta corrente: </strong>Se
                  ao cair o seu salário o banco desconta grande parte ou a
                  totalidade dele.
                </li>
                <li>
                  <strong>Negociações sem Sucesso:</strong> Se tentativas de
                  resolver o problema diretamente com o banco não foram
                  bem-sucedidas.
                </li>
                <li>
                  <strong>Evidências Disponíveis:</strong> Se você possui
                  documentos, como extratos bancários que comprovam os descontos
                  indevidos.
                </li>
                <li>
                  <strong>Descontos desconhecidos:</strong> Se você não sabe por
                  qual motivo o banco desconta valores em sua conta corrente.
                </li>
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
                <li>
                  <strong>
                    Pessoas que querem retirar descontos do contracheque:
                  </strong>{" "}
                  Não é possível retirar esse tipo de desconto.
                </li>
                <li>
                  <strong>Descontos baixos:</strong> Se os valores descontados
                  são irrelevantes para sua saúde financeira.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="text-black bg-white">
        <div className="container p-8 mx-auto space-y-8 md:space-y-0 md:flex md:flex-row md:py-16 md:space-x-8 ">
          <div
            className="min-w-full md:w-1/2 md:min-w-fit min-h-64"
            style={{
              backgroundImage: 'url("/images/ceo.avif")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>

          <div className="space-y-8 conteudo md:w-1/2">
            <h2 className="mb-3 text-2xl font-bold md:text-4xl">Quem Somos?</h2>{" "}
            <div className="space-y-8">
              <p>
                O escritório Kruger Toledo Advocacia é um escritório
                especializado em direito bancário, comprometido em valorizar seu
                dinheiro da forma que você merece. Buscamos os melhores ganhos
                possíveis através de uma assessoria individualizada. Destacamos
                alguns diferenciais que contribuirão para o sucesso do seu
                processo:
              </p>
              <div>
                <p className="font-bold">Conte com nossa ajuda!</p>
                <ul className="list-disc ms-8">
                  <li>Vasta experiência com centenas de clientes.</li>
                  <li>Atendimento personalizado.</li>
                  <li>SMS para acompanhar a movimentação do processo.</li>
                  <li>
                    Entregamos nosso máximo em cada processo porque nosso
                    objetivo é ajudar você a alcançar seus direitos.
                  </li>
                </ul>
              </div>
              <p>
                Nosso escritório é administrado pela sócia-líder Esther Krüger,
                formada pela PUC/RS, que já trabalhou em empresas multinacionais
                e em uma das quatro maiores empresas de auditoria e
                contabilidade do mundo. Trabalha diariamente auxiliando pessoas
                que foram vítimas das grandes instituições financeiras. Traz ao
                escritório a atualização e tecnologia necessária para os
                negócios atualmente.
              </p>
            </div>
            <div className="flex flex-row justify-center md:justify-start">
              <Link
                href="https://wa.me/+5551997570244/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
                className="flex flex-row space-x-4 ">
                <p className="px-4 py-2 text-white bg-orange-500 transition-all hover:text-orange-500 hover:bg-white">
                  Conte com nossa ajuda!
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
            href="https://wa.me/+5551997570244/?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20em%20direito%20banc%C3%A1rio"
            className="flex flex-row space-x-4 ">
            <p className="px-4 py-2 text-white bg-orange-500 transition-all hover:text-orange-500 hover:bg-white">
              Fale agora com um advogado
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
