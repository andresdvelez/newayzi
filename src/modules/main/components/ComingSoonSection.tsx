import { Button, Image } from "@heroui/react";

export const ComingSoonSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - App Mockup */}
          <div className="rounded-3xl ">
            <div className="relative aspect-[9/16] max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-newayzi-purple to-newayzi-blue rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-white p-0 rounded-3xl transform rotate-0 overflow-visible">
                <Image
                  src="/brand/mobile-mockup.png"
                  alt="Newayzi mobile app"
                  className=" object-cover rounded-2xl "
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700/30 rounded-full"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-newayzi-purple/10 text-newayzi-purple px-4 py-2 rounded-full text-sm font-medium font-sora mb-6">
              🎉 ¡Estamos por llegar!
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-newayzi-jet mb-6 font-sora">
              La forma de hospedarte
              <span className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue bg-clip-text text-transparent">
                {" "}
                cambiará para siempre
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 font-sora leading-relaxed">
              Espacios únicos, flexibilidad total, experiencia premium.
              Regístrate y sé parte del prelanzamiento de Newayzi.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue hover:from-newayzi-blue hover:to-newayzi-purple text-white font-sora px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Explorar más
              </Button>

              <Button
                variant="bordered"
                size="lg"
                className="border-2 border-newayzi-purple text-newayzi-purple hover:bg-newayzi-purple hover:text-white font-sora px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Contáctanos
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-newayzi-purple font-sora mb-1">
                  🌐
                </div>
                <div className="text-xs text-gray-500 font-sora">
                  www.newayzi.com
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-newayzi-blue font-sora mb-1">
                  📱
                </div>
                <div className="text-xs text-gray-500 font-sora">
                  App disponible pronto
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-newayzi-red font-sora mb-1">
                  📍
                </div>
                <div className="text-xs text-gray-500 font-sora">
                  Colombia 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
