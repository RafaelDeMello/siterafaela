"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, MousePointerClick } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["700"] });

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
  ariaLabel,
}: {
  produtos: { nome: string; descricao: string; imagem: string }[];
  hideArrows?: boolean;
  centerDesktop?: boolean;
  ariaLabel?: string;
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

  // Dica de scroll para mobile
  const showScrollTip = produtos.length > 2;

  return (
    <div className="relative w-full">
      {/* Modal */}
      {modalIdx !== null && (
        <motion.div
          key={modalIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <div className="relative bg-white rounded-lg shadow-lg p-4 flex flex-col items-center max-w-[90vw]">
            <button
              className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow"
              onClick={() => setModalIdx(null)}
              aria-label="Fechar"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#F7E9F0] rounded-full p-1 shadow"
              onClick={handlePrev}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-[#A67C8F]" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F7E9F0] rounded-full p-1 shadow"
              onClick={handleNext}
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-[#A67C8F]" />
            </button>
            <Image
              key={modalIdx}
              src={produtos[modalIdx].imagem}
              alt={produtos[modalIdx].nome}
              width={600}
              height={600}
              className="border-[6px] border-[#F7E9F0] rounded-lg max-h-[60vh] max-w-full object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-[#6B4C4C] mb-2 text-center">
              {produtos[modalIdx].nome}
            </h3>
            <p className="text-gray-600 text-center text-base mb-2">
              {produtos[modalIdx].descricao}
            </p>
            <p className="italic text-[#A67C8F] text-sm mt-2">
              “Cada criação é uma obra para saborear.”
            </p>
          </div>
        </motion.div>
      )}

      {/* Setas desktop só se não for para esconder */}
      {!hideArrows && (
        <>
          <button
            aria-label="Anterior"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#F7E9F0] hover:bg-[#EACDD2] shadow rounded-full p-1 border border-[#EACDD2] transition-colors"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-5 h-5 text-[#A67C8F]" />
          </button>
          <button
            aria-label="Próximo"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#F7E9F0] hover:bg-[#EACDD2] shadow rounded-full p-1 border border-[#EACDD2] transition-colors"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-5 h-5 text-[#A67C8F]" />
          </button>
        </>
      )}
      <div
        ref={ref}
        aria-label={ariaLabel}
        className={`flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 md:px-8 snap-x snap-mandatory scroll-smooth ${
          centerDesktop ? "md:justify-center" : ""
        }`}
      >
        {produtos.map((produto, idx) => (
          <div
            key={idx}
            className="min-w-[220px] max-w-[220px] border-[1px] border-[#EACDD2] rounded-lg shadow-md p-4 flex flex-col items-center snap-center cursor-pointer transition hover:scale-105 hover:shadow-lg hover:border-[#D4A5A5] bg-white"
            onClick={() => setModalIdx(idx)}
            title="Clique para ampliar"
          >
            <div className="w-full h-36 relative mb-4">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                fill
                className="object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#6B4C4C] mb-2 text-center font-cormorant">
              {produto.nome}
            </h3>
            <p className="text-gray-600 text-center text-sm">
              {produto.descricao}
            </p>
          </div>
        ))}
      </div>
      {/* Dica de scroll para mobile */}
      {showScrollTip && (
        <div className="flex md:hidden justify-center mt-2 animate-bounce">
          <MousePointerClick className="w-5 h-5 text-[#A67C8F]" />
          <span className="ml-2 text-xs text-[#A67C8F]">Arraste para o lado</span>
        </div>
      )}
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full min-h-screen bg-[#FFF8F2] max-w-6xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      {/* Frase de abertura */}
      <p className="text-center text-[#A67C8F] italic mb-4">
        “Exclusividade • Arte • Sabor • Experiência”
      </p>
      <h2 className={`${cormorant.className} text-3xl md:text-4xl text-[#6B4C4C] font-bold mb-8 text-center`}>
        Produtos
      </h2>
      <div className="w-full flex flex-col gap-12">
        {categorias.map((cat, idx) => (
          <div key={idx} className="w-full">
            {/* Separador artístico entre categorias */}
            {idx > 0 && (
              <hr className="border-t-[1px] border-[#EACDD2] w-1/3 mx-auto my-8" />
            )}
            {/* Se tiver subcategorias, renderize cada uma */}
            {"subcategorias" in cat ? (
              cat.subcategorias!.map((sub, subIdx) => (
                <div key={subIdx} className="mb-8">
                  <h4 className={`${cormorant.className} text-2xl font-semibold mb-2 text-[#6B4C4C] text-left ml-4 md:ml-8`}>
                    {sub.nome}
                  </h4>
                  <Carousel
                    produtos={sub.produtos}
                    hideArrows={true}
                    centerDesktop={true}
                    ariaLabel={`Carrossel de produtos da subcategoria ${sub.nome}`}
                  />
                  {sub.descricao && (
                    <p className="text-[#A67C8F] text-center text-base mt-4 max-w-2xl mx-auto italic">
                      {sub.descricao}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <>
                <h3 className={`${cormorant.className} text-2xl font-semibold mb-4 text-[#6B4C4C] text-left ml-4 md:ml-8`}>
                  {cat.nome}
                </h3>
                <Carousel
                  produtos={cat.produtos}
                  hideArrows={cat.nome === "Texturas" ? true : undefined}
                  centerDesktop={cat.nome === "Texturas" ? true : undefined}
                  ariaLabel={`Carrossel de produtos da categoria ${cat.nome}`}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}