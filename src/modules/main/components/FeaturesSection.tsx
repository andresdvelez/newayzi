import { Card, CardBody } from "@heroui/react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Estancias Flexibles",
      description:
        "Reserva por 15 días o más con la posibilidad de renovar cuantas veces necesites",
      color: "from-newayzi-purple to-newayzi-blue",
      icon: "🏠",
    },
    {
      title: "Búsqueda Inteligente",
      description:
        "Encuentra el alojamiento perfecto con nuestros filtros avanzados y recomendaciones personalizadas",
      color: "from-newayzi-blue to-newayzi-dark-orchid",
      icon: "🔍",
    },
    {
      title: "Reservas Instantáneas",
      description:
        "Confirma tu estancia al instante sin complicaciones ni esperas innecesarias",
      color: "from-newayzi-dark-orchid to-newayzi-red",
      icon: "⚡",
    },
    {
      title: "Hosts Verificados",
      description:
        "Todos nuestros anfitriones están verificados para garantizar tu seguridad y comodidad",
      color: "from-newayzi-red to-newayzi-majorelle",
      icon: "✅",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-newayzi-jet mb-6 font-sora">
            Navega el mundo con el
            <span className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue bg-clip-text text-transparent">
              {" "}
              host experto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sora">
            Descubre una nueva forma de hospedarte con características diseñadas
            para estancias largas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 hover:scale-105"
            >
              <CardBody className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{feature.icon}</span>
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
