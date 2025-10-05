"use client";

import Image from "next/image";
import { Dancing_Script, Lora } from "next/font/google";
import { motion } from "framer-motion";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400"] });
const lora = Lora({ subsets: ["latin"], weight: ["400"] });

const carouselImages = [
  "/fotos-colecao-pascoa/img1.jpg",
  "/fotos-colecao-pascoa/img2.jpg",
  "/fotos-colecao-pascoa/img3.jpg",
  "/fotos-colecao-pascoa/img4.jpg",
];

export function About() {
  return (
    <section
      id="sobre"
      className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center gap-10"
    >
      {/* Imagem e texto lado a lado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col md:flex-row items-center md:items-start gap-10 transition-all duration-500 ease-in-out"
      >
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/fotos-colecao-pascoa/img1.jpg"
            alt="Fundadora da Marca"
            width={350}
            height={350}
            className="border-[6px] border-[#F7E9F0] rounded-lg object-cover shadow-[0_4px_20px_rgba(233,196,220,0.4)]"
          />
        </div>
        {/* Título e texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2
            className={`${dancingScript.className} text-3xl md:text-4xl font-bold text-gray-900 mt-0 mb-8`}
            style={{ lineHeight: 1 }}
          >
            Quem Cria
          </h2>
          <p className={`${lora.className} text-gray-700 text-lg leading-relaxed mb-4 mt-2 text-center md:text-left`}>
            Fundada por <span>Fundadora</span>, nossa marca nasceu do amor pela
            gastronomia e do desejo de compartilhar sabores únicos. Desde o
            início, buscamos unir tradição e inovação, criando experiências
            inesquecíveis para nossos clientes.
          </p>
          <p className={`${lora.className} text-gray-700 text-base leading-relaxed text-center md:text-left`}>
            Cada prato é preparado com carinho, ingredientes selecionados e
            muita dedicação. Nossa equipe acredita que cozinhar é uma arte, e
            cada detalhe faz parte da nossa história.
          </p>
          <span className="mt-6 italic text-[#A67C8F] text-lg  pl-4 text-center md:text-left">
            “Cozinhar é transformar ingredientes em memórias.”
          </span>
        </div>
      </motion.div>

      {/* Separador artístico */}
      <hr className="border-t-[1px] border-[#EACDD2] w-1/3 my-8" />

      {/* Carrossel de fotos */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full mt-10 flex flex-col items-center"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
          Coleção Páscoa
        </h3>
        <div
          aria-label="Galeria de produtos da coleção Páscoa"
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
                transition-transform duration-300 hover:scale-105
              "
            >
              <Image
                src={src}
                alt={`Foto ${idx + 1}`}
                width={160}
                height={160}
                className="rounded object-cover"
              />
              {/* Exemplo de overlay opcional:
              <div className="absolute bottom-2 left-2 bg-white/70 px-2 py-1 rounded text-xs font-semibold text-[#A67C8F] mix-blend-multiply">
                Arte
              </div>
              */}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}