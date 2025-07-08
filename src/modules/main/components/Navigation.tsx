"use client";

import { Link, useRouter } from "@/modules/translations/i18n/routing";
import { Button, Image } from "@heroui/react";

export const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* Newayzi Logo */}
              <Image
                src="/brand/logo.png"
                width={42}
                className="object-cover rounded-sm"
                alt="Newayzi"
              />
              <span className="text-2xl font-bold text-newayzi-jet font-sora">
                Newayzi
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-gray-700 hover:text-newayzi-purple transition-colors font-sora text-sm"
            >
              ¿Qué es?
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-newayzi-purple transition-colors font-sora text-sm"
            >
              Beneficios
            </Link>
            <Link
              href="/homes"
              className="text-gray-700 hover:text-newayzi-purple transition-colors font-sora text-sm"
            >
              Alojamientos
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-newayzi-purple transition-colors font-sora text-sm"
            >
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-3">
            {/* <Button
              variant="bordered"
              className="hidden md:inline-flex border-newayzi-purple text-newayzi-purple hover:bg-newayzi-purple hover:text-white font-sora transition-colors"
            >
              WhatsApp
            </Button> */}
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
