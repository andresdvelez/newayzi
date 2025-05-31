import { Button, Card, CardBody } from "@heroui/react";

export const WhatIsNewayziSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Infographic */}
          <div className="relative">
            <div className="bg-gradient-to-br from-newayzi-purple/10 to-newayzi-blue/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-newayzi-jet mb-6 font-sora">
                Opciones de alojamiento
              </h3>

              <div className="space-y-6">
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardBody className="p-4 flex flex-row items-center space-x-4">
                    <div className="w-12 h-12 bg-newayzi-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🛌</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-newayzi-jet font-sora">
                        Cápsulas Inteligentes
                      </h4>
                      <p className="text-sm text-gray-600 font-sora">
                        Perfectas para descansos cortos
                      </p>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardBody className="p-4 flex flex-row items-center space-x-4">
                    <div className="w-12 h-12 bg-newayzi-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🏨</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-newayzi-jet font-sora">
                        Suites de Lujo
                      </h4>
                      <p className="text-sm text-gray-600 font-sora">
                        Experiencia premium por días
                      </p>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardBody className="p-4 flex flex-row items-center space-x-4">
                    <div className="w-12 h-12 bg-newayzi-dark-orchid rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🏠</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-newayzi-jet font-sora">
                        Apartasuites
                      </h4>
                      <p className="text-sm text-gray-600 font-sora">
                        Para estancias semanales o mensuales
                      </p>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardBody className="p-4 flex flex-row items-center space-x-4">
                    <div className="w-12 h-12 bg-newayzi-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🏢</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-newayzi-jet font-sora">
                        Propiedades Premium
                      </h4>
                      <p className="text-sm text-gray-600 font-sora">
                        Espacios completos con servicios hoteleros
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Duration Scale */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-newayzi-jet mb-4 font-sora">
                  Duración del hospedaje
                </h3>
                <div className="bg-white rounded-full h-2 w-full">
                  <div className="relative h-2 w-full">
                    <div className="absolute -top-1 left-0 w-4 h-4 bg-newayzi-purple rounded-full"></div>
                    <div className="absolute -top-1 left-1/4 w-4 h-4 bg-newayzi-blue rounded-full"></div>
                    <div className="absolute -top-1 left-2/4 w-4 h-4 bg-newayzi-dark-orchid rounded-full"></div>
                    <div className="absolute -top-1 left-3/4 w-4 h-4 bg-newayzi-red rounded-full"></div>
                    <div className="absolute -top-1 right-0 w-4 h-4 bg-newayzi-majorelle rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs mt-2 text-gray-600 font-sora">
                  <span>Horas</span>
                  <span>Día</span>
                  <span>Semana</span>
                  <span>Mes</span>
                  <span>+Meses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-newayzi-jet mb-6 font-sora">
              Tu nueva forma de
              <span className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue bg-clip-text text-transparent">
                {" "}
                vivir y hospedarte
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 font-sora leading-relaxed">
              Newayzi es una plataforma que te permite reservar espacios de
              alojamiento por horas, noches, semanas o meses, con acceso a
              cápsulas inteligentes, suites, apartasuites y propiedades premium.
            </p>

            <p className="text-xl text-gray-600 mb-8 font-sora leading-relaxed">
              Todo bajo un estándar de calidad superior, con la experiencia de
              hosts expertos.
            </p>

            <div className="bg-gradient-to-r from-newayzi-purple/10 to-newayzi-blue/10 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-newayzi-jet mb-3 font-sora">
                ¿Por qué elegir Newayzi?
              </h3>
              <p className="text-gray-700 font-sora">
                Combinamos la flexibilidad de servicios bajo demanda con la
                calidad de la hotelería premium, dándote control total sobre tu
                experiencia de alojamiento.
              </p>
            </div>

            <Button className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue hover:from-newayzi-blue hover:to-newayzi-purple text-white font-sora px-6 py-3 rounded-full text-lg transition-all duration-300">
              Descubre más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
