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
    </section>
  )
}
