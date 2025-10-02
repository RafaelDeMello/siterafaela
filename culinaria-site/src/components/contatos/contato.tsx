"use client";

export function Contato() {
  return (
    <section
      id="contato"
      className="w-full max-w-3xl mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
        Fale Conosco
      </h2>
        <span>
          E-mail: <a href="mailto:contato@seudominio.com" className="underline hover:text-gray-800">contato@seudominio.com</a>
        </span>
        <span>
          WhatsApp: <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-800">(99) 99999-9999</a>
        </span>
        <span>Instagram: <a href="">@</a></span>
        {/* Adicione outros canais se quiser */}
    </section>
  );
}