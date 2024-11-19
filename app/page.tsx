import type { Metadata } from "next";

import { EmblaCarousel } from "./sections/atuacao";
import Footer from "./sections/footer";
import Header from "./sections/header";

export const metadata: Metadata = {
  description:
    "Krüger Toledo Advocacia: Especialistas em defender consumidores contra abusos e ilegalidades dos grandes bancos. Conheça nossa equipe liderada pela sócia-líder Esther Krüger Toledo, comprometida em fornecer soluções personalizadas para superar o endividamento. Todos os direitos reservados.",
};

export default function Home() {
  return (
    <>
      <link rel="preload" as="image" href="/images/herobackdefault.avif"></link>
      {/* header */}
      <Header />

      {/* hero */}
      <section
        style={{
          backgroundImage: 'url("/images/herobackdefault.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-32 md:py-16">
        <div className="container flex flex-col justify-center h-full p-8 mx-auto text-center text-white  md:py-16 space-y-4">
          <p className="text-xl">
            Assistência aos superendividados de uma forma integral
          </p>
          <h1 className="text-4xl font-bold">
            Muito além da repactuação das dívidas
          </h1>
        </div>
      </section>

      {/* atuação */}
      <section>
        <div className="container p-8 py-16 mx-auto ">
          <h2 className="mb-8 text-2xl font-bold text-center">
            Áreas de Atuação
          </h2>
          <EmblaCarousel></EmblaCarousel>

          <div className="flex overflow-x-auto w-full pb-8 gap-8  [&_h3]:font-bold [&_h3]:text-lg [&>div]:md:w-[300px] [&>div]:w-[250px] [&>div]:flex-shrink-0 hidden">
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/ressarcimento.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Ressarcimento de RMC:</h3>
              <p>
                Analisamos as operações de RMC para verificar ilegalidades e
                levantar valores cobrados de forma indevida.
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/revisional.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Revisional de contratos:</h3>
              <p>
                Muitas vezes ao assinar o contrato, o cliente é induzido ao
                erro. Erro que pode custar caro. Analisamos todos os seus
                contratos para verificar taxas abusivas, seguros aplicados de
                maneira ilegal, juros abusivos. Muitas vezes, nessa análise,
                conseguimos diminuir muito os valores das parcelas e até mesmo
                reaver valores que foram pagos indevidamente.
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage:
                    'url("/images/atuacao/golpeportabilidade.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Golpe da portabilidade:</h3>
              <p>
                Muitas vezes na tentativa de diminuir as dívidas o consumidor
                acaba fazendo a portabilidade bancária. Com falsas promessas de
                que os valores a ser pagas irão diminuir, assinam contratos que
                não condizem com o produto oferecido.
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/revogacao.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Revogação de liminares de busca e apreensão:</h3>
              <p>
                Revogamos junto ao juízo, liminares de busca e apreensão de
                veículos e máquinas. A análise do processo detecta falhas
                administrativas anteriores ao deferimento da busca e apreensão.
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/contestacao.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Contestação de cobrança de valores indevidos:</h3>
              <p>
                Se você considera ter sido lesado pelos bancos de alguma forma,
                você tem direito a reparação pecuniária aos danos causados sendo
                que em alguns casos podem superar R$ 50.000,00 (cinquenta mil
                reais).
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/revisao.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Revisão de contratos antigos:</h3>
              <p>
                Em milhares de casos os bancos renegociam suas dívidas e fazem
                novo contrato maquiando as cobranças ilegais anteriormente
                lançadas em sua conta.
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/prestacao.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Prestação de contas de venda de veículos leiloados:</h3>
              <p>
                Teve seu veículo leiloado sem a devida prestação de contas pelos
                bancos ou financeiras, saiba que você pode ter dinheiro
                depositado para receber.
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/danomoral.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Dano moral na portabilidade de conta bancária:</h3>
              <p>
                Na maioria das vezes, quando você faz a portabilidade de sua
                conta bancária, os bancos costumam reter todo o seu salário,
                inclusive os futuros, para quitar pendências ou cobranças.
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/acessoria.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Assessoria em portabilidade de contas bancárias:</h3>
              <p>
                Para não sofrer danos e indisposições com a portabilidade junto
                aos bancos e seus gerentes, acompanhamos no processo todo.
              </p>
            </div>
            <div className="">
              <div
                className="h-32 mb-2 "
                style={{
                  backgroundImage: 'url("/images/atuacao/retomada.avif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>
              <h3>Retomada de veículos apreendidos:</h3>
              <p>
                Se o seu bem foi apreendido em busca e apreensão judicial,
                analisaremos todo o processo e encontraremos falhas que existem
                na maioria dos casos, reavendo o seu bem e colocando-o na sua
                posse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* escritorio kruger pt1 */}
      <section>
        <div className="container p-8 py-16 mx-auto  xl:w-10/12">
          <div
            className="grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1"
            style={{ gridTemplateRows: "min-content auto" }}>
            <div
              className="h-48 md:h-full"
              style={{
                backgroundImage: 'url("/images/part1.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <div>
              <h2 className="mb-8 text-2xl font-bold">
                O escritório Krüger Toledo advocacia e sua atuação na área
                bancária.
              </h2>
              <div className="text-lg">
                <p className="">
                  Acompanhamos de perto no dia a dia todas ilegalidades e
                  abusividades que são realizadas com o consumidor. Compramos
                  essa briga e atuamos somente contra os grandes bancos. Nosso
                  objetivo é fornecer soluções personalizadas para atender às
                  necessidades de nossos clientes, independente do grau de
                  endividamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* escritorio kruger pt2 */}
      <section>
        <div className="container p-8 py-16 mx-auto xl:w-10/12">
          <div
            className="grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1 "
            style={{ gridTemplateRows: "min-content auto" }}>
            <div
              className="h-48 md:h-full md:order-2"
              style={{
                backgroundImage: 'url("/images/part2.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <div>
              <h2 className="mb-8 text-2xl font-bold">
                O escritório conta com uma equipe completa que atende e resolve
                o seu problema.
              </h2>
              <div className="text-lg">
                <p className="font-bold">
                  Contamos com uma equipe formado por:
                </p>
                <ul className="list-disc ms-8">
                  <li>Advogados auxiliares;</li>
                  <li>Contadores experientes;</li>
                  <li>Técnicos contadores auxiliares;</li>
                  <li>Equipe de apoio dedicada e proativa;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* esther */}
      <section>
        <div className="container p-8 py-16 mx-auto lg:w-2/3 xl:w-1/2">
          <h2 className="mb-8 text-4xl font-bold text-center">
            Esther Krüger Toledo
          </h2>
          <div className="grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1">
            <div
              className="w-full h-full min-h-72 lg:min-h-0"
              style={{
                backgroundImage: 'url("/images/esther.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <p className="text-lg">
              Sócia-líder do escritório formada pela PUC/RS, já trabalhou em
              empresas multinacionais e em uma das três maiores empresas de
              auditoria e contabilidade do mundo. Trabalha diariamente
              auxiliando pessoas que foram vítimas das grandes instituições
              financeiras. Traz ao escritório a atualização e tecnologia
              necessária para os negócios atualmente.
            </p>
          </div>
        </div>
      </section>

      {/* rodape */}
      <Footer />
    </>
  );
}
