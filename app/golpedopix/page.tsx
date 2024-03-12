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
        <div className="container mx-auto pt-8">
          <div id="content" className="px-8">
            <h1 className="mb-3 text-4xl font-bold">
              Recupere seu dinheiro perdido no golpe do pix
            </h1>
            <h2 className="mb-8 text-xl">
              Através da nossa metodologia é possível recuperar os valores
              perdidos. Não fique no prejuízo!
            </h2>
            <Link href="/start" className="flex-row flex space-x-4">
              <Image
                src="/images/whatsapp.png"
                width={48}
                height={48}
                alt="Whatsapp Icon"
              />

              <p className="px-5 py-3 bg-green-600 text-white ">
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
    </>
  );
}
