"use client";

import { useRouter } from "@/modules/translations/i18n/routing";
import { Button } from "@heroui/react";
import Image from "next/image";

export const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-newayzi-purple/10 text-newayzi-purple px-4 py-2 rounded-full text-sm font-medium font-sora mb-6">
              ✨ Próximamente disponible
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-newayzi-jet mb-6 font-sora leading-tight">
              La solución más
              <span className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue bg-clip-text text-transparent">
                {" "}
                corta
              </span>
              <br />
              para las estancias
              <span className="bg-gradient-to-r from-newayzi-blue to-newayzi-dark-orchid bg-clip-text text-transparent">
                {" "}
                largas
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 font-sora leading-relaxed">
              Versatilidad es: Rentar por 15 días o más y poder renovar las
              veces que quieras. Descubre una nueva forma de viajar y hospedarte
              con Newayzi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onPress={() => router.push("/auth/waitlist")}
                size="lg"
                className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue hover:from-newayzi-blue hover:to-newayzi-purple text-white font-sora px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Únete a la Lista de Espera
                {/* <ChevronRight className="ml-2 w-5 h-5" /> */}
              </Button>

              <Button
                variant="bordered"
                size="lg"
                className="border-2 border-newayzi-purple text-newayzi-purple hover:bg-newayzi-purple hover:text-white font-sora px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500 font-sora">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                15 días mínimos de permanencia
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-newayzi-purple rounded-full mr-2"></div>
                Renovación flexible
              </div>
            </div>
          </div>

          {/* Right Content - Product Preview */}
          <div className="animate-scale-in">
            <div className="relative">
              {/* Main Preview Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video bg-gradient-to-br from-newayzi-purple/20 to-newayzi-blue/20 rounded-2xl mb-6 flex items-center justify-center relative">
                  <Image
                    src="/placeholder.png"
                    alt="Newayzi Platform Preview"
                    className="w-full h-full object-cover rounded-2xl"
                    fill
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-newayzi-purple bg-newayzi-purple/10 px-3 py-1 rounded-full font-sora">
                      Bogotá
                    </span>
                    <span className="text-gray-500 text-sm font-sora">
                      25 m²
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-newayzi-jet font-sora">
                    Be Living
                  </h3>
                  <p className="text-gray-600 text-sm font-sora">
                    1 Habitación, 1 Baño, 25 m²
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-newayzi-red to-newayzi-dark-orchid rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-lg font-sora">
                  N
                </span>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-newayzi-blue to-newayzi-majorelle rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-white font-bold font-sora">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
