import { About } from "@/components/about/About";
import { Contato } from "@/components/contatos/contato";
import { Footer } from "@/components/footer/rodape";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/Navbar";
import { Portfolio } from "@/components/products/produtos";


export default function Home() {
  return (
    <main>
           <Navbar />
          <section id="hero">
            <Hero />
          </section>
          <hr className="border-t border-gray-200/70 my-0" />
          <section id="sobre">
            <About />
          </section>
          <hr className="border-t border-gray-200/70 my-0" />
          <section id="portfolio">
            <Portfolio />
          </section>
          <hr className="border-t border-gray-200/70 my-0" />
          <section id="contato">
            <Contato />
          </section>
          <footer>
            <Footer />
          </footer>
    </main>
  );
}
