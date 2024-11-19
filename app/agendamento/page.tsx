import Image from "next/image";

export default function Page() {
    return (
        <div className="radial h-screen w-full flex items-center justify-center ">
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
                <video
                    width="620"
                    height="440"
                    controls
                    preload="auto"
                    className="w-full rounded">
                    <source src="/videos/divida.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="text-white">
                    <h1 className="text-2xl sm:text-3xl font-semibold ss4">Faça seu agendamento</h1>
                    {/* <p className="text-zinc-200 sm:text-lg">Nosso time de especialistas entrará em contato com você via Whatsapp o quanto antes!</p> */}
                </div>
            </div>
        </div>
    )
}