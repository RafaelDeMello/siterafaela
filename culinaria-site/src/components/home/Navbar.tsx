"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import MenuMobile from "./MobileMenu"

export function Navbar() {
  // Função para scroll suave
  function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80; // 80 = altura do menu
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex mx-auto">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#hero"
                    className={navigationMenuTriggerStyle()}
                    onClick={e => handleSmoothScroll(e, "hero")}
                  >
                    Home
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#sobre"
                    className={navigationMenuTriggerStyle()}
                    onClick={e => handleSmoothScroll(e, "sobre")}
                  >
                    Sobre
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#portfolio"
                    className={navigationMenuTriggerStyle()}
                    onClick={e => handleSmoothScroll(e, "portfolio")}
                  >
                    Portfólio
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#contato"
                    className={navigationMenuTriggerStyle()}
                    onClick={e => handleSmoothScroll(e, "contato")}
                  >
                    Contato
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <MenuMobile />
        
      </div>
    </nav>
  )
}
