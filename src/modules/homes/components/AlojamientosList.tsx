"use client";

import { useRouter } from "next/navigation";
import { Property } from "@/types/property";
import { useOptimistic } from "react";
import { toggleFavorite } from "../services/propertyService";
import { Button, Image } from "@heroui/react";

interface AlojamientosListProps {
  properties: Property[];
}

export const AlojamientosList = ({ properties }: AlojamientosListProps) => {
  const router = useRouter();
  const [optimisticProperties, addOptimisticProperty] = useOptimistic(
    properties,
    (state: Property[], { id, favorite }: { id: string; favorite: boolean }) =>
      state.map((property) =>
        property.id === id ? { ...property, favorite } : property
      )
  );

  const handleToggleFavorite = async (id: string) => {
    const property = optimisticProperties.find((p) => p.id === id);
    if (!property) return;

    // Optimistic update
    addOptimisticProperty({ id, favorite: !property.favorite });

    try {
      await toggleFavorite(id);
    } catch (error) {
      console.error("Error toggling favorite:", error);
      // Revert optimistic update on error
      addOptimisticProperty({ id, favorite: property.favorite });
    }
  };

  const handleViewProperty = (id: string) => {
    router.push(`/room/${id}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Alojamientos disponibles
        </h1>
        <p className="text-gray-600">
          {optimisticProperties.length}{" "}
          {optimisticProperties.length === 1
            ? "propiedad encontrada"
            : "propiedades encontradas"}
        </p>
      </div>

      {optimisticProperties.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🏠</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No se encontraron alojamientos
          </h3>
          <p className="text-gray-600">
            Intenta ajustar tus filtros para encontrar más opciones
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {optimisticProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-center">
                {/* Property Image */}
                <div className="w-96 h-full relative shrink-0">
                  <Image
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover z-0 rounded-r-none"
                    classNames={{
                      wrapper: "p-0 m-0",
                    }}
                  />
                  <Button
                    onPress={() => handleToggleFavorite(property.id)}
                    isIconOnly
                    className="absolute top-3 z-10 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-md"
                  >
                    {property.favorite ? (
                      <i
                        className="icon-[mdi--heart] size-5 text-red-500"
                        role="img"
                        aria-hidden="true"
                      />
                    ) : (
                      <i
                        className="icon-[mdi--heart] size-5 text-gray-600"
                        role="img"
                        aria-hidden="true"
                      />
                    )}
                  </Button>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {property.type}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {property.name}
                      </h3>
                      <div className="flex items-center gap-1 ml-4">
                        <i
                          className="icon-[material-symbols--star] size-4 text-yellow-400 fill-current"
                          role="img"
                          aria-hidden="true"
                        />
                        <span className="font-medium text-gray-900">
                          {property.rating}
                        </span>
                        <span className="text-gray-600">
                          ({property.reviews} reseñas)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-600 mb-3">
                      <i
                        className="icon-[lucide--map-pin] size-4"
                        role="img"
                        aria-hidden="true"
                      />
                      <span>{property.location}</span>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {property.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                          +{property.features.length - 3} más
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>{property.maxGuests} huéspedes</span>
                      <span>•</span>
                      <span>{property.bedrooms} dormitorios</span>
                      <span>•</span>
                      <span>{property.bathrooms} baños</span>
                      <span>•</span>
                      <span>{property.size} m²</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        ${property.price.toLocaleString()}
                      </div>
                      <div className="text-gray-600 text-sm">por noche</div>
                    </div>

                    <Button
                      onPress={() => handleViewProperty(property.id)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                    >
                      Ver apartamento
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
