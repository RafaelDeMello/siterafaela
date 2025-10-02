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
		produtos: [
			{
				nome: "Ovo Trufado",
				descricao: "Chocolate recheado com trufa cremosa.",
				imagem: "/produtos/ovo-trufado.jpg",
			},
			// ...mais ovos
		],
	},
	{
		nome: "Texturas",
		produtos: [
			{
				nome: "Textura Crocante",
				descricao: "Camadas crocantes e saborosas.",
				imagem: "/produtos/textura-crocante.jpg",
			},
			// ...mais texturas
		],
	},
];

function Carousel({ produtos }: { produtos: typeof categorias[0]["produtos"] }) {
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

	// Funções para navegar no modal
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
						{/* Botão anterior */}
						<button
							className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow"
							onClick={handlePrev}
							aria-label="Anterior"
						>
							<ChevronLeft className="w-6 h-6 text-gray-700" />
						</button>
						{/* Botão próximo */}
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

			{/* Setas desktop */}
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
			<div
				ref={ref}
				className="flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 md:px-8 snap-x snap-mandatory scroll-smooth"
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
						<h3 className="text-2xl font-semibold mb-4 text-gray-800">
							{cat.nome}
						</h3>
						<Carousel produtos={cat.produtos} />
					</div>
				))}
			</div>
		</section>
	);
}