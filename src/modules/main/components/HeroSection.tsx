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
              ✨ Una nueva forma de hospedarte está por llegar
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-newayzi-jet mb-6 font-sora leading-tight">
              Flexibilidad, diseño y
              <span className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue bg-clip-text text-transparent">
                {" "}
                experiencia
              </span>
              <br />
              de alto nivel
            </h1>

            <p className="text-xl text-gray-600 mb-8 font-sora leading-relaxed">
              <strong>
                Desde horas hasta meses. Desde cápsulas a propiedades cinco
                estrellas.
              </strong>{" "}
              Todo al alcance de un clic. #NewayziExperience
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-100 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-newayzi-purple font-sora">
                    Horas
                  </div>
                  <div className="text-sm text-gray-600 font-sora">
                    Cápsulas
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-newayzi-blue font-sora">
                    Días
                  </div>
                  <div className="text-sm text-gray-600 font-sora">Suites</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-newayzi-red font-sora">
                    Meses
                  </div>
                  <div className="text-sm text-gray-600 font-sora">
                    Apartasuites
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onPress={() => router.push("/auth/waitlist")}
                size="lg"
                className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue hover:from-newayzi-blue hover:to-newayzi-purple text-white font-sora px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Notifícame en el lanzamiento
                <i
                  className="icon-[material-symbols--chevron-right-rounded] size-5 ml-2"
                  role="img"
                  aria-hidden="true"
                />
              </Button>

              <Button
                variant="bordered"
                size="lg"
                className="border-2 border-newayzi-purple text-newayzi-purple hover:bg-newayzi-purple hover:text-white font-sora px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                <i
                  className="icon-[tabler--play] size-5 mr-2"
                  role="img"
                  aria-hidden="true"
                />
                Ver Demo
              </Button>
            </div>

            <div className="text-sm text-gray-500 font-sora">
              <p className="flex items-center mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Lanzamiento previsto: Q3 2025
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-newayzi-purple rounded-full mr-3"></span>
                Disponible inicialmente en Colombia
              </p>
            </div>
          </div>

          {/* Right Content - Product Preview */}
          <div className="animate-scale-in">
            <div className="relative">
              {/* Main Preview Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video bg-gradient-to-br from-newayzi-purple/20 to-newayzi-blue/20 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/brand/newayzi-landing.png"
                    alt="Newayzi Platform Preview"
                    className="w-full h-full object-cover rounded-2xl"
                    fill
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-newayzi-purple bg-newayzi-purple/10 px-3 py-1 rounded-full font-sora">
                      Suite Premium
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm font-sora mr-1">4.9</span>
                      ★★★★★
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-newayzi-jet font-sora">
                    Suite Ejecutiva
                  </h3>
                  <p className="text-gray-600 text-sm font-sora">
                    Por horas • Días • Semanas • Equipada
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-newayzi-purple font-sora">
                      Flexible
                    </span>
                    <span className="text-sm text-gray-400 font-sora">
                      Alto nivel
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-newayzi-red to-newayzi-dark-orchid rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-lg font-sora">
                  N
                </span>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-white font-bold font-sora text-xs">
                  NEW
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
