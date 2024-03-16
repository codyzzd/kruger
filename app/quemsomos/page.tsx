import type { Metadata } from "next";
import Footer from "../sections/footer";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "xxx.",
};

export default function Home() {
  return (
    <>
      {/* header */}

      {/* hero */}

      {/* atuação */}

      {/* escritorio kruger pt1 */}

      {/* escritorio kruger pt2 */}

      {/* esther */}
      <h2>Esther Krüger Toledo</h2>
      <p>
        Sócia-líder do escritório formada pela PUC/RS, já trabalhou em empresas
        multinacionais e em uma das três maiores empresas de auditoria e
        contabilidade do mundo. Trabalha diariamente auxiliando pessoas que
        foram vítimas das grandes instituições financeiras. Traz ao escritório a
        atualização e tecnologia necessária para os negócios atualmente.
      </p>
      
      {/* rodape */}
      <Footer></Footer>
    </>
  );
}
