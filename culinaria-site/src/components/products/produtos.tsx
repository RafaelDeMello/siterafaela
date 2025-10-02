"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const categorias = [
	{
		nome: "Bolos",
		produtos: [
			{
				nome: "Bolo 1",
				descricao: "Feito com cacau premium e cobertura cremosa.",
				imagem: "/fotos-bolo/img2.jpg",
			},
			{
				nome: "Bolo 2",
				descricao: "Base crocante e recheio suave de limão.",
				imagem: "/fotos-bolo/img3.jpg",
			},
			{
				nome: "Bolo 3",
				descricao: "Massa fofinha e decoração artesanal.",
				imagem: "/fotos-bolo/img4.jpg",
			},
            {
				nome: "Bolo 4",
				descricao: "Feito com cacau premium e cobertura cremosa.",
				imagem: "/fotos-bolo/img6.jpg",
			},
            {
				nome: "Bolo 6",
				descricao: "Feito com cacau premium e cobertura cremosa.",
				imagem: "/fotos-bolo/img7.jpg",
			},
             {
				nome: "Bolo 7",
				descricao: "Feito com cacau premium e cobertura cremosa.",
				imagem: "/fotos-bolo/img10.jpg",
			},
             {
				nome: "Bolo 8",
				descricao: "Feito com cacau premium e cobertura cremosa.",
				imagem: "/fotos-bolo/img12.jpg",
			},
		],
	},
	{
		nome: "Ovos de Páscoa",
		subcategorias: [
			{
				nome: "Ovos",
				descricao: "Ovos tradicionais recheados com sabores clássicos e muito carinho.",
				produtos: [
					{
						nome: "Ovo 1",
						descricao: "Chocolate recheado com trufa cremosa.",
						imagem: "/ovos-pascoa/img1.jpg",
					},
                    {
						nome: "Ovo 1",
						descricao: "Chocolate recheado com trufa cremosa.",
						imagem: "/ovos-pascoa/img1-1.jpg",
					},
                    {
						nome: "Ovo 1",
						descricao: "Chocolate recheado com trufa cremosa.",
						imagem: "/ovos-pascoa/img1-2.jpg",
					},
				],
			},
			{
				nome: "Ovos 2",
				descricao: "Ovos de Páscoa com recheio de chocolate branco e morango.",
				produtos: [
					{
						nome: "Ovo 2",
						descricao: "Chocolate branco com recheio de morango.",
						imagem: "/ovos-pascoa/img2.jpg",
					},
                    {
						nome: "Ovo 2",
						descricao: "Chocolate branco com recheio de morango.",
						imagem: "/ovos-pascoa/img2-1.jpg",
					},
                    {
						nome: "Ovo 2",
						descricao: "Chocolate branco com recheio de morango.",
						imagem: "/ovos-pascoa/img2-2.jpg",
					},
					// ...mais ovos 2
				],
			},
			{
				nome: "Ovos 3",
				descricao: "Ovos recheados com chocolate ao leite e crocante.",
				produtos: [
					{
						nome: "Ovo 3",
						descricao:"",
						imagem: "/ovos-pascoa/img3.jpg",
					},
                    {
						nome: "Ovo 3",
						descricao: "",
						imagem: "/ovos-pascoa/img3-2.jpg",
					},
                     {
						nome: "Ovo 3",
						descricao: "",
						imagem: "/ovos-pascoa/img3-1.jpg",
					},
					// ...mais ovos 3
				],
			},
		],
	},
	{
		nome: "Texturas",
		produtos: [
			{
				nome: "Textura Crocante",
				descricao: "Camadas crocantes e saborosas.",
				imagem: "/texturas/img1.jpg",
			},
            {
				nome: "Textura Crocante",
				descricao: "Camadas crocantes e saborosas.",
				imagem: "/texturas/img2.jpg",
			},
             {
				nome: "Textura Crocante",
				descricao: "Camadas crocantes e saborosas.",
				imagem: "/texturas/img3.jpg",
			},
		],
	},
];

function Carousel({
  produtos,
  hideArrows = false,
  centerDesktop = false,
}: {
  produtos: { nome: string; descricao: string; imagem: string }[];
  hideArrows?: boolean;
  centerDesktop?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "right" ? 220 : -220,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (modalIdx !== null) {
      setModalIdx((prev) => (prev! - 1 + produtos.length) % produtos.length);
    }
  };
  const handleNext = () => {
    if (modalIdx !== null) {
      setModalIdx((prev) => (prev! + 1) % produtos.length);
    }
  };

  return (
    <div className="relative w-full">
      {/* Modal */}
      {modalIdx !== null && (
        <div key={modalIdx} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative bg-white rounded-lg shadow-lg p-4 flex flex-col items-center max-w-[90vw]">
            <button
              className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow"
              onClick={() => setModalIdx(null)}
              aria-label="Fechar"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow"
              onClick={handlePrev}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow"
              onClick={handleNext}
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            <Image
              key={modalIdx}
              src={produtos[modalIdx].imagem}
              alt={produtos[modalIdx].nome}
              width={600}
              height={600}
              className="rounded-lg max-h-[60vh] max-w-full object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {produtos[modalIdx].nome}
            </h3>
            <p className="text-gray-600 text-center text-base">
              {produtos[modalIdx].descricao}
            </p>
          </div>
        </div>
      )}

      {/* Setas desktop só se não for para esconder */}
      {!hideArrows && (
        <>
          <button
            aria-label="Anterior"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow rounded-full p-1 border border-gray-200"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <button
            aria-label="Próximo"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow rounded-full p-1 border border-gray-200"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </>
      )}
      <div
        ref={ref}
        className={`flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 md:px-8 snap-x snap-mandatory scroll-smooth ${
          centerDesktop ? "md:justify-center" : ""
        }`}
      >
        {produtos.map((produto, idx) => (
          <div
            key={idx}
            className="min-w-[220px] max-w-[220px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center snap-center cursor-pointer transition hover:scale-105"
            onClick={() => setModalIdx(idx)}
            title="Clique para ampliar"
          >
            <div className="w-full h-36 relative mb-4">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {produto.nome}
            </h3>
            <p className="text-gray-600 text-center text-sm">
              {produto.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full max-w-6xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
        Produtos
      </h2>
      <div className="w-full flex flex-col gap-12">
        {categorias.map((cat, idx) => (
          <div key={idx} className="w-full">
            {/* Se tiver subcategorias, renderize cada uma */}
            { "subcategorias" in cat ? (
                cat.subcategorias!.map((sub, subIdx) => (
                  <div key={subIdx} className="mb-8">
                    <h4 className="text-lg font-semibold mb-2 text-gray-700 text-left ml-4 md:ml-8">
                      {sub.nome}
                    </h4>
                    <Carousel
                      produtos={sub.produtos}
                      hideArrows={true}
                      centerDesktop={true}
                    />
                    {sub.descricao && (
                      <p className="text-gray-600 text-center text-base mt-4 max-w-2xl mx-auto">
                        {sub.descricao}
                      </p>
                    )}
                  </div>
                ))
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-left ml-4 md:ml-8">
                  {cat.nome}
                </h3>
                <Carousel
                  produtos={cat.produtos}
                  hideArrows={cat.nome === "Texturas" ? true : undefined}
                  centerDesktop={cat.nome === "Texturas" ? true : undefined}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}