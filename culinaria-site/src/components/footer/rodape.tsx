"use client";

import { Instagram, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#FFF8F2] border-t border-[#EACDD2] py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
      
        <span className="text-[#A67C8F] text-sm text-center italic font-light">
          © {new Date().getFullYear()} Royal Cake. Arte para saborear.
        </span>
      </div>
    </footer>
  );
}