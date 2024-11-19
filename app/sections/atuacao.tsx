"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import "../sections/embla.css";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function EmblaCarousel() {
  const OPTIONS: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };
  const SLIDE_COUNT = 9;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="flex flex-row justify-center mb-4 gap-2">
        <button
          className="embla__prev hover:bg-slate-100 w-10 h-10 border-[1px] border-slate-200"
          onClick={scrollPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="embla__next hover:bg-slate-100 w-10 h-10 border-[1px] border-slate-200"
          onClick={scrollNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container [&_h3]:font-bold [&_h3]:text-lg [&>div]:md:w-[300px] [&>div]:w-[250px] [&>div]:flex-shrink-0">
          <div className="embla__slide">
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
          <div className="embla__slide">
            <div
              className="h-32 mb-2 "
              style={{
                backgroundImage: 'url("/images/atuacao/revisional.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <h3>Revisional de contratos:</h3>
            <p>
              Muitas vezes ao assinar o contrato, o cliente é induzido ao erro.
              Erro que pode custar caro. Analisamos todos os seus contratos para
              verificar taxas abusivas, seguros aplicados de maneira ilegal,
              juros abusivos. Muitas vezes, nessa análise, conseguimos diminuir
              muito os valores das parcelas e até mesmo reaver valores que foram
              pagos indevidamente.
            </p>
          </div>
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
              bancos ou financeiras, saiba que você pode ter dinheiro depositado
              para receber.
            </p>
          </div>
          <div className="embla__slide">
            <div
              className="h-32 mb-2 "
              style={{
                backgroundImage: 'url("/images/atuacao/danomoral.avif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
            <h3>Dano moral na portabilidade de conta bancária:</h3>
            <p>
              Na maioria das vezes, quando você faz a portabilidade de sua conta
              bancária, os bancos costumam reter todo o seu salário, inclusive
              os futuros, para quitar pendências ou cobranças.
            </p>
          </div>
          <div className="embla__slide">
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
          <div className="embla__slide">
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
              analisaremos todo o processo e encontraremos falhas que existem na
              maioria dos casos, reavendo o seu bem e colocando-o na sua posse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
