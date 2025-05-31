import { Button, Card, CardBody } from "@heroui/react";
import Image from "next/image";

export const ProductPreview = () => {
  const properties = [
    {
      name: "Cápsula Smart Sleep",
      location: "Aeropuerto El Dorado, Bogotá",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNsZWVwJTIwY2Fwc3VsZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "Desde $25.000/hora",
      features: [
        "WiFi ultrarrápido",
        "Climatización",
        "Cargadores USB",
        "Aislamiento acústico",
      ],
      color: "bg-newayzi-purple",
    },
    {
      name: "Suite Ejecutiva",
      location: "Zona T, Bogotá",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      price: "Desde $180.000/noche",
      features: [
        "Cama king size",
        "Smart TV",
        "Escritorio de trabajo",
        "Room service 24/7",
      ],
      color: "bg-newayzi-blue",
    },
    {
      name: "Apartasuite Premium",
      location: "El Poblado, Medellín",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      price: "Desde $3.200.000/mes",
      features: ["Cocina completa", "Lavadora", "Gimnasio", "Vista panorámica"],
      color: "bg-newayzi-dark-orchid",
    },
    {
      name: "Villa Exclusiva",
      location: "Baru, Cartagena",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      price: "Desde $850.000/noche",
      features: [
        "Piscina privada",
        "Servicio de chef",
        "Vista al mar",
        "Transporte privado",
      ],
      color: "bg-newayzi-red",
    },
    {
      name: "Loft Corporativo",
      location: "Ciudad del Río, Medellín",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwbG9mdHxlbnwwfHwwfHx8MA%3D%3D",
      price: "Desde $2.800.000/mes",
      features: [
        "Espacio de coworking",
        "Sala de reuniones",
        "Seguridad 24/7",
        "Internet dedicado",
      ],
      color: "bg-newayzi-majorelle",
    },
    {
      name: "Cápsula Smart Sleep",
      location: "Aeropuerto El Dorado, Bogotá",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNsZWVwJTIwY2Fwc3VsZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "Desde $25.000/hora",
      features: [
        "WiFi ultrarrápido",
        "Climatización",
        "Cargadores USB",
        "Aislamiento acústico",
      ],
      color: "bg-newayzi-purple",
    },
  ];

  const destinations = [
    {
      city: "Bogotá",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      color: "bg-newayzi-purple",
    },
    {
      city: "Medellín",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      color: "bg-newayzi-blue",
    },
    {
      city: "Santa Marta",
      image:
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
      color: "bg-newayzi-red",
    },
    {
      city: "Cartagena",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      color: "bg-newayzi-dark-orchid",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-newayzi-jet mb-6 font-sora">
            Explora nuestras
            <span className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue bg-clip-text text-transparent">
              {" "}
              ciudades
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sora">
            Descubre alojamientos únicos en las principales ciudades de Colombia
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <CardBody className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    fill
                    src={destination.image}
                    alt={`Alojamientos en ${destination.city}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`${destination.color} text-white px-3 py-1 rounded-full text-sm font-medium font-sora`}
                  >
                    {destination.city}
                  </span>
                  <h3 className="text-white font-semibold text-lg mt-2 font-sora">
                    Be Living
                  </h3>
                  <p className="text-white/80 text-sm font-sora">
                    1 Habitación, 1 Baño, 25 m²
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-newayzi-jet mb-6 font-sora">
              Top 5
              <span className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue bg-clip-text text-transparent">
                {" "}
                alojamientos destacados
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sora">
              Estos son algunos de los espacios que pronto podrás reservar a
              través de Newayzi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {properties.map((property, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <CardBody className="p-0 relative">
                  {/* Property Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      fill
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Price Tag */}
                  <div
                    className={`absolute top-4 right-4 ${property.color} text-white px-3 py-1 rounded-full text-sm font-medium font-sora`}
                  >
                    {property.price}
                  </div>

                  {/* Property Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1 font-sora">
                      {property.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-3 font-sora">
                      {property.location}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-sora"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-newayzi-purple to-newayzi-blue hover:from-newayzi-blue hover:to-newayzi-purple text-white font-sora px-10 py-6 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="mr-2">💬</span>
              Contáctanos por WhatsApp
            </Button>
            <p className="text-sm text-gray-500 mt-4 font-sora">
              Pregúntanos por disponibilidad, lanzamiento o más detalles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
