"use client";

import { Mail, MessageCircle, Instagram } from "lucide-react";

export function Contato() {
  return (
    <section
      id="contato"
      className="w-full max-w-3xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
        Fale Conosco
      </h2>
      <p className="text-center text-[#A67C8F] italic mb-4">
        “Vamos conversar? Cada detalhe importa.”
      </p>
      <hr className="border-t-[1px] border-[#EACDD2] w-1/3 mx-auto my-6" />
      <div className="flex flex-col gap-4 mt-4 w-full items-center text-gray-700">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-[#A67C8F]" />
          <a
            href="mailto:contato@seudominio.com"
            className="underline hover:text-[#8C5C6B]"
          >
            contato@seudominio.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-[#A67C8F]" />
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#8C5C6B]"
          >
            (99) 99999-9999
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Instagram className="w-5 h-5 text-[#A67C8F]" />
          <a
            href="https://instagram.com/royalcake"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#8C5C6B]"
          >
            @royalcake
          </a>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-8">
        Royal Cake – Arte para saborear.
      </p>
    </section>
  );
}