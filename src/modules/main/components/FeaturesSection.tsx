import { Card, CardBody } from "@heroui/react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Flexibilidad total",
      description:
        "Paga solo por el tiempo que necesitas: horas, noches, semanas o incluso meses. Tú decides cómo y cuándo hospedarte.",
      color: "from-newayzi-purple to-newayzi-blue",
      icon: (
        <i
          className="icon-[tabler--clock] size-6 text-white"
          role="img"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Todo incluido",
      description:
        "Disfruta alojamientos completamente equipados: mobiliario de calidad, internet de alta velocidad, limpieza semanal y todos los servicios.",
      color: "from-newayzi-blue to-newayzi-dark-orchid",
      icon: (
        <i
          className="icon-[meteor-icons--home] size-6 text-white"
          role="img"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Estándares de hotel de lujo",
      description:
        "Vive una experiencia superior con atención personalizada, excelencia en el servicio y detalles que marcan la diferencia.",
      color: "from-newayzi-dark-orchid to-newayzi-red",
      icon: (
        <i
          className="icon-[lucide--hotel] size-6 text-white"
          role="img"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Host experto",
      description:
        "Trabajamos con operadores hoteleros seleccionados para ofrecerte alojamientos gestionados por expertos, garantizando calidad.",
      color: "from-newayzi-red to-newayzi-majorelle",
      icon: (
        <i
          className="icon-[lucide--user-check] size-6 text-white"
          role="img"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Alojamientos variados",
      description:
        "Elige entre cápsulas tecnológicas, suites de lujo, apartasuites o propiedades completas con servicios hoteleros premium.",
      color: "from-newayzi-majorelle to-newayzi-international-blue",
      icon: (
        <i
          className="icon-[lucide--building] size-6 text-white"
          role="img"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Mejores precios del mercado",
      description:
        "Precios ajustados a tus necesidades y al tiempo real del mercado, siempre obteniendo el mejor valor por tu dinero.",
      color: "from-newayzi-international-blue to-newayzi-purple",
      icon: (
        <i
          className="icon-[bx--dollar] size-6 text-white"
          role="img"
          aria-hidden="true"
        />
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-newayzi-jet mb-6 font-sora">
            ¡Newayzi un servicio pensado en
            <span className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue bg-clip-text text-transparent">
              {" "}
              tu bienestar!
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sora">
            Descubre los valores que nos diferencian y hacen de Newayzi la mejor
            opción para tus necesidades de hospedaje
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105"
            >
              <CardBody className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-newayzi-jet mb-4 font-sora">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-sora leading-relaxed">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
