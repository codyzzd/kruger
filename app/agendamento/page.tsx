import Image from "next/image";

export default function Page() {
    return (
        <div className="radial h-screen w-full flex items-start sm:items-center justify-center sm:pt-0 pt-8">
            <div className="w-full sm:max-w-3xl max-w-xl flex flex-col items-center text-center gap-4 sm:gap-8 px-4">
                <div className="relative w-[120px] h-[48px]">
                    <Image
                        className=""
                        src="/images/logokruger.png"
                        alt="Logo Kruger Advocacia"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <h1 className="text-white text-2xl sm:text-3xl font-semibold ss4">Você está quase lá...</h1>
                        <p className="text-zinc-200 sm:text-lg">Assista ao vídeo abaixo para saber dos próximos passos do seu atendimento.</p>
                    </div>
                    <iframe className="md:h-[424px] w-full h-56 rounded" src="https://www.youtube.com/embed/yCV8gLzIXUk?si=cvG9OZiM5wnMDT8v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl sm:text-3xl font-semibold ss4">Faça seu agendamento</h1>
                    {/* <p className="text-zinc-200 sm:text-lg">Nosso time de especialistas entrará em contato com você via Whatsapp o quanto antes!</p> */}
                </div>
            </div>
        </div>
    )
}