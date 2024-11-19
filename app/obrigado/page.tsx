import Image from "next/image";

export default function Page() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-[#0a2136]">
            <div className="w-full max-w-xl flex flex-col items-center text-center gap-4 sm:gap-8 px-4">
                <Image
                    className=""
                    src="/images/logokruger.png"
                    width={120}
                    height={30}
                    alt="Logo Kruger Advocacia"
                />
                <div className="text-white">
                    <h1 className="text-2xl sm:text-3xl font-semibold ss4">Parabéns por dar o primeiro passo</h1>
                    <p className="text-zinc-200 sm:text-lg">Nosso time de especialistas entrará em contato com você via Whatsapp o quanto antes!</p>
                </div>
            </div>
        </div>
    )
}