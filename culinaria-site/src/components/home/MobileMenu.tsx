
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // ajuste 80 para a altura do seu menu fixo
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const MobileMenu = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100/80 backdrop-blur-md shadow-sm z-50 flex md:hidden justify-center">
      <div className="flex gap-6 py-3 text-lg font-medium">
        <a href="#hero" className="hover:text-gray-700" onClick={e => scrollToSection(e, "hero")}>
          Home
        </a>
        <a href="#sobre" className="hover:text-gray-700" onClick={e => scrollToSection(e, "sobre")}>
          Sobre
        </a>
        <a href="#portfolio" className="hover:text-gray-700" onClick={e => scrollToSection(e, "portfolio")}>
          Portfólio
        </a>
        <a href="#contato" className="hover:text-gray-700" onClick={e => scrollToSection(e, "contato")}>
          Contato
        </a>
      </div>
    </nav>
  );
};

export default MobileMenu;