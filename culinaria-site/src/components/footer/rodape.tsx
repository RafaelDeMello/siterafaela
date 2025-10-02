"use client";

export function Footer() {
  return (
    <footer className="w-full bg-gray-100/80 border-t border-gray-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <span className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Rafaela Gastronomia. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}