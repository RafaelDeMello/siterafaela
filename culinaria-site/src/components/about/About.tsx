"use client";

import Image from "next/image";

const carouselImages = [
  "/fotos-colecao-pascoa/img1.jpg",
  "/fotos-colecao-pascoa/img2.jpg",
  "/fotos-colecao-pascoa/img3.jpg",
  "/fotos-colecao-pascoa/img4.jpg",
  // Adicione mais imagens conforme necessário
];

export function About() {
  return (
    <section
      id="sobre"
      className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center gap-10"
    >
      {/* Imagem e texto */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/fotos-colecao-pascoa/img1.jpg"
            alt="Fundadora da Marca"
            width={350}
            height={350}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nossa História
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Fundada por [Nome da Fundadora], nossa marca nasceu do amor pela
            gastronomia e do desejo de compartilhar sabores únicos. Desde o
            início, buscamos unir tradição e inovação, criando experiências
            inesquecíveis para nossos clientes.
          </p>
          <p className="text-gray-700 text-base">
            Cada prato é preparado com carinho, ingredientes selecionados e
            muita dedicação. Nossa equipe acredita que cozinhar é uma arte, e
            cada detalhe faz parte da nossa história.
          </p>
          <span className="mt-6 italic text-gray-500">
            “Cozinhar é transformar ingredientes em memórias.”
          </span>
        </div>
      </div>

      {/* Carrossel de fotos */}
      <div className="w-full mt-10 flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
          Algum texto
        </h3>
        <div
          className="
            flex gap-6 py-4
            overflow-x-auto
            scrollbar-thin scrollbar-thumb-gray-200
            w-full
            justify-center
            md:justify-center
            md:overflow-x-visible
            "
        >
          {carouselImages.map((src, idx) => (
            <div
              key={idx}
              className="
                min-w-[180px] max-w-[180px] bg-white rounded-lg shadow-md p-2 flex items-center justify-center
                mx-auto
              "
            >
              <Image
                src={src}
                alt={`Foto ${idx + 1}`}
                width={160}
                height={160}
                className="rounded object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}