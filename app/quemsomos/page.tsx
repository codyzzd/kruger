import type { Metadata } from "next";
import Footer from "../sections/footer";
import Header from "../sections/header";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Krüger Toledo Advocacia: Especialistas em auxiliar servidores públicos superendividados, oferecendo estratégias jurídicas eficazes para reequilibrar suas finanças. Conheça nossa equipe liderada pela sócia-líder Esther Krüger e saiba como podemos ajudar. Todos os direitos reservados.",
};

export default function Home() {
  return (
    <>
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

      {/* alvo */}
      <section>
        <div className="container p-8 py-16 mx-auto  lg:w-1/2">
          <div className="text-center">
            <p>NOSSO ALVO SÃO AS INSTITUIÇÕES FINANCEIRAS</p>
            <h2 className="mb-8 text-4xl font-bold">
              O escritório Krüger Toledo
            </h2>
          </div>
          <div className="text-lg">
            <p className="mb-4 ">
              O escritório Krüger Toledo Advocacia, atua ajudando servidores
              públicos a superar o superendividamento. Com nossa ampla
              experiência no atendimento a inúmeros clientes e no gerenciamento
              de recursos significativos, estamos prontos para desenvolver
              estratégias jurídicas altamente eficazes para ajudar a
              reequilibrar suas finanças pessoais de maneira efetiva.
            </p>
            <p className="mb-4 ">
              Nosso escritório é administrado pela sócia-líder Esther Krüger,
              formada pela PUC/RS, que já trabalhou em empresas multinacionais e
              em uma das quatro maiores empresas de auditoria e contabilidade do
              mundo. Trabalha diariamente auxiliando pessoas que foram vítimas
              das grandes instituições financeiras. Traz ao escritório a
              atualização e tecnologia necessária para os negócios atualmente.
            </p>

            <p className="font-bold">
              O escritório conta com uma equipe formada por:
            </p>
            <ul className="list-disc ms-8">
              <li>Advogados auxiliares;</li>
              <li>Contadores experientes;</li>
              <li>Técnicos contadores auxiliares;</li>
              <li>Equipe de apoio dedicada e proativa;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* rodape */}
      <Footer />
    </>
  );
}
