"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function Page() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="bg-white py-2">
                <p
                    className="text-[#272d5d] text-md uppercase font-bold flex gap-4 whitespace-nowrap overflow-hidden text-ellipsis"
                    // style={{ display: 'block', width: '100%' }}
                >
                    <span className="tracking-wider">Últimas Vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                    <span>•</span>
                    <span className="tracking-wider">Últimas vagas para esta semana</span>
                </p>
            </div>
            <div className="min-h-screen w-full bg-gradient-to-r from-[#06071a] to-[#272d5d] flex items-start sm:items-center justify-center sm:pt-24 pt-32">
                <div className="w-full sm:max-w-7xl max-w-xl flex flex-col items-center text-center gap-12 sm:gap-32 px-4">
                    <div className="flex flex-col gap-4 sm:gap-8">
                        <div>
                            <h1 className="text-white text-xl sm:text-3xl font-medium">Você foi pré aprovado para agendar uma análise de passivos!</h1>
                        </div>
                        <iframe className="md:h-[496px] w-full h-56 rounded" src="https://www.youtube.com/embed/yCV8gLzIXUk?si=cvG9OZiM5wnMDT8v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="text-white pt-0 flex flex flex-col gap-8 sm:gap-12">
                        <div className="flex justify-center">
                            <h1 className="text-xl sm:text-3xl font-medium max-w-xl">Clique abaixo e agende em um dos horários disponíveis:</h1>
                        </div>
                        <div
                            className="calendly-inline-widget -mt-4 sm:-mt-16"
                            data-url="https://calendly.com/samuelkruger4/rafa-teste"
                            style={{ minWidth: '320px', height: '1000px' }}
                        ></div>
                        <div className="-translate-y-40 sm:-translate-y-32 flex flex-col items-center gap-4 max-w-4xl">
                            <p className="text-base sm:text-xl"><strong>ATENÇÃO:</strong> Lembre-se que temos dezenas de pessoas interessadas na análise de passivos e você foi um dos selecionados, se você faltar à análise estará tirando a oportunidade de outro, que assim como você, deseja acabar com suas dívidas.</p>
                            <p className="text-sm opacity-40 max-w-3xl font-light">Utilizamos cookies para oferecer uma experiência de atendimento proativa, aprimorar a navegação no site, analisar a utilização do site e ajudar em nossas atividades de marketing. Em alguns países, se você continuar a usar este site e se navegar para outra página, concorda que leu e aceitou a utilização de cookies.</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='bg-white py-8 flex justify-center items-center text-white sm:-mt-16 -mt-32'>
                <div className="flex justify-between items-center w-full max-w-3xl flex-col sm:flex-row gap-6 sm:gap-0 text-[#272d5d]">
                    <div className="relative w-[124px] h-[48px]">
                        <Image
                            src="/images/logokrugerblack.png"
                            alt="Logo Kruger Toledo Advocacia"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <p>© Todos os direitos reservados</p>
                </div>
            </footer>
        </>
    )
}