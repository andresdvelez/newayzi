import { Card, CardBody } from "@heroui/react";

export const ProductPreview = () => {
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
                <div className="aspect-[4/3] overflow-hidden">
                  <img
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

        {/* App Preview Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mobile App Preview */}
          <Card className="bg-gradient-to-br from-newayzi-purple to-newayzi-blue p-8 text-white border-0">
            <CardBody className="p-0">
              <h3 className="text-2xl font-bold mb-4 font-sora">
                Búsqueda Newayzi
              </h3>
              <p className="text-white/90 mb-6 font-sora">
                Segmenta tus alojamientos y encuentra exactamente lo que buscas
              </p>
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="w-full h-32 bg-white/10 rounded-xl mb-4"></div>
                <div className="text-sm font-sora">
                  Vista previa de la app móvil
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Featured Properties */}
          <Card className="bg-gradient-to-br from-newayzi-jet to-gray-800 p-8 text-white border-0">
            <CardBody className="p-0">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">⭐</span>
                <span className="text-sm font-sora">Medellín</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-sora">
                Top 5 de alojamientos
              </h3>
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="w-full h-32 bg-white/10 rounded-xl mb-4"></div>
                <div className="text-sm font-sora">Propiedades destacadas</div>
              </div>
            </CardBody>
          </Card>

          {/* Sustainable Tourism */}
          <Card className="bg-gradient-to-br from-gray-800 to-newayzi-jet p-8 text-white border-0">
            <CardBody className="p-0">
              <h3 className="text-2xl font-bold mb-4 font-sora">
                Tu apartamento por menos
              </h3>
              <h4 className="text-xl font-semibold mb-6 font-sora">
                Hotelería sostenible
              </h4>
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="w-full h-32 bg-white/10 rounded-xl mb-4"></div>
                <div className="text-sm font-sora">Turismo responsable</div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
