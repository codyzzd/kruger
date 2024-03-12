import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section
        className="text-white"
        style={{
          backgroundImage: 'url("/images/fundohero.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="container mx-auto pt-8 space-y-8">
          <div id="content" className="px-8">
            <Image
              className="mb-16"
              src="/images/logokruger.png"
              width={150}
              height={40}
              alt="Logo Kruger Advocacia"
            />
            <h1 className="mb-3 text-4xl font-bold">
              Recupere seu dinheiro perdido no golpe do pix
            </h1>
            <h2 className="mb-8 text-lg">
              Através da nossa metodologia é possível recuperar os valores
              perdidos. Não fique no prejuízo!
            </h2>
            <hr className="border-t-2 border-orange-500 my-8"></hr>
            <Link href="/start" className="flex-row flex space-x-4">
              <Image
                src="/images/whatsapp.png"
                width={40}
                height={40}
                alt="Whatsapp Icon"
              />

              <p className="px-4 py-2 bg-green-600 text-white ">
                Fale agora com um advogado
              </p>
            </Link>
          </div>
          <div id="photo" className="px-8">
            <Image
              src="/images/homemtriste.png"
              width={500}
              height={500}
              alt="Homem com a mão na cara triste de camisa comprida azul escuro"
            />
          </div>
        </div>
      </section>

      {/* video */}
      <section className="text-white bg-blue-950">
        <div className="container mx-auto p-8 space-y-8 flex flex-col items-center justify-center">
          <h1 className="mb-3 text-2xl font-bold text-center">
            Veja mais sobre como podemos te ajudar:
          </h1>
          <video width="320" height="240" controls preload="auto">
            <source src="/videos/golpedopix.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Link href="/start" className="flex-row flex space-x-4 ">
            <Image
              src="/images/whatsapp.png"
              width={40}
              height={40}
              alt="Whatsapp Icon"
            />

            <p className="px-4 py-2 bg-green-600 text-white ">
              Fale com um advogado
            </p>
          </Link>
        </div>
      </section>

      {/* bulletlist */}
      <section className="text-white bg-blue-900">
        <div className="container mx-auto p-8 space-y-8 ">
          <h1 className="mb-3 text-2xl font-bold text-center">
            Veja os casos que podemos lhe ajudar
          </h1>
          <div id="listas">
            <div id="bom">
              <div>
                <h6 className="text-xl font-bold mb-4">Para quem serve:</h6>
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
              <ul>
                <li>Golpe Abaixo de R$ 3.000,00</li>
                <li>Reaver Pix Realizado sem Existência de Golpe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
