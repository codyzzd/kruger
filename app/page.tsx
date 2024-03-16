import type { Metadata } from "next";
import Footer from "./sections/footer";



export const metadata: Metadata = {
  title: "Kruger",
  description: "xxx.",
};

export default function Home() {
  return (
    <>
      {/* header */}

      {/* hero */}
      <section
        style={{
          backgroundImage: 'url("/images/fundohero.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-32 md:py-16">
        <div className="container flex flex-col justify-center  h-full p-8 mx-auto md:py-16 text-white text-center space-y-4">
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

      </section>

      {/* escritorio kruger pt1 */}
      <section>
        <div className="container p-8 mx-auto  lg:w-2/3 xl:w-1/2 py-16">
          <div
            className="grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1"
            style={{ gridTemplateRows: "min-content auto" }}>
            <div
              className="h-48 md:h-full"
              style={{
                backgroundImage: 'url("/images/ceo.avif")',
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
        <div className="container p-8 mx-auto py-16 lg:w-2/3 xl:w-1/2">
          <div
            className="grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1 "
            style={{ gridTemplateRows: "min-content auto" }}>
            <div
              className="h-48 md:h-full md:order-2"
              style={{
                backgroundImage: 'url("/images/ceo.avif")',
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
                <ul className="list-disc ms-4">
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
        <div className="container p-8 mx-auto py-16 lg:w-2/3 xl:w-1/2">
          <h2 className="mb-8 text-4xl font-bold text-center">
            Esther Krüger Toledo
          </h2>
          <div className="grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1">
            <div
              className="w-full h-full min-h-72 lg:min-h-0"
              style={{
                backgroundImage: 'url("/images/ceo.avif")',
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
      <Footer></Footer>
    </>
  );
}
