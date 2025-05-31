"use client";

import { useRouter } from "@/modules/translations/i18n/routing";
import { Button } from "@heroui/react";

export const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* Newayzi Logo */}
              <div className="w-8 h-8 bg-gradient-to-br from-newayzi-purple to-newayzi-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-sora">
                  N
                </span>
              </div>
              <span className="text-2xl font-bold text-newayzi-jet font-sora">
                Newayzi
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#que-es"
              className="text-gray-700 hover:text-newayzi-purple transition-colors font-sora text-sm"
            >
              ¿Qué es?
            </a>
            <a
              href="#beneficios"
              className="text-gray-700 hover:text-newayzi-purple transition-colors font-sora text-sm"
            >
              Beneficios
            </a>
            <a
              href="#alojamientos"
              className="text-gray-700 hover:text-newayzi-purple transition-colors font-sora text-sm"
            >
              Alojamientos
            </a>
            <a
              href="#contacto"
              className="text-gray-700 hover:text-newayzi-purple transition-colors font-sora text-sm"
            >
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-3">
            <Button
              variant="bordered"
              className="hidden md:inline-flex border-newayzi-purple text-newayzi-purple hover:bg-newayzi-purple hover:text-white font-sora transition-colors"
            >
              WhatsApp
            </Button>
            <Button
              onPress={() => router.push("/auth/waitlist")}
              className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue hover:from-newayzi-blue hover:to-newayzi-purple text-white font-sora px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Lista de espera
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
