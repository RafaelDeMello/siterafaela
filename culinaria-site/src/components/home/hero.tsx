"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white"
    >
      {/* Logo */}
      <div className="relative w-48 h-48 mb-6">
        <Image
          src="/logo.png" // substitua pelo caminho correto da logo
          alt="Logo da Marca"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Frase animada */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${dancingScript.className} text-4xl md:text-8xl text-gray-700 tracking-wider`}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Gastronomia com arte
      </motion.h1>

      {/* Setinha para baixo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center">
        <a href="#sobre" aria-label="Ir para a próxima seção">
          <svg
            className="w-8 h-8 text-gray-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
