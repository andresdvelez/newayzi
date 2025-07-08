"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Select, SelectItem } from "@heroui/react";

interface FiltersProps {
  initialFilters: {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    propertyType: string;
    priceRange: [number, number];
    rating: string;
    amenities: string[];
  };
}

export const AlojamientosFilters = ({ initialFilters }: FiltersProps) => {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(initialFilters);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (filters.location) params.set("location", filters.location);
    if (filters.checkIn) params.set("checkIn", filters.checkIn);
    if (filters.checkOut) params.set("checkOut", filters.checkOut);
    if (filters.guests > 1) params.set("guests", filters.guests.toString());
    if (filters.propertyType) params.set("propertyType", filters.propertyType);
    if (filters.priceRange[0] > 0)
      params.set("minPrice", filters.priceRange[0].toString());
    if (filters.priceRange[1] < 1000000)
      params.set("maxPrice", filters.priceRange[1].toString());
    if (filters.rating) params.set("rating", filters.rating);
    if (filters.amenities.length > 0)
      params.set("amenities", filters.amenities.join(","));

    router.push(`/alojamientos?${params.toString()}`);
  };

  const amenityOptions = [
    { value: "wifi", label: "WiFi gratuito" },
    { value: "parking", label: "Estacionamiento" },
    { value: "gym", label: "Gimnasio" },
    { value: "pool", label: "Piscina" },
    { value: "breakfast", label: "Desayuno" },
    { value: "ac", label: "Aire acondicionado" },
    { value: "kitchen", label: "Cocina" },
    { value: "washer", label: "Lavadora" },
    { value: "pet-friendly", label: "Mascotas permitidas" },
    { value: "24h-reception", label: "Recepción 24h" },
  ];

  const handleAmenityChange = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];
    handleFilterChange("amenities", newAmenities);
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      {/* Main Search Bar */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <div className="flex items-center gap-4">
            {/* Location Search */}
            <div className="flex-1 flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
              <i
                className="icon-[lucide--map-pin] size-5 text-gray-400"
                role="img"
                aria-hidden="true"
              />
              <Input
                type="text"
                placeholder="¿A dónde vas?"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full border-0 p-0 focus:ring-0 focus:outline-none"
              />
            </div>

            {/* Check-in Date */}
            <div className="flex-1 flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
              <i
                className="icon-[lucide--calendar] size-5 text-gray-400"
                role="img"
                aria-hidden="true"
              />
              <Input
                type="date"
                value={filters.checkIn}
                onChange={(e) => handleFilterChange("checkIn", e.target.value)}
                className="w-full border-0 p-0 focus:ring-0 focus:outline-none"
              />
            </div>

            {/* Check-out Date */}
            <div className="flex-1 flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
              <i
                className="icon-[lucide--calendar] size-5 text-gray-400"
                role="img"
                aria-hidden="true"
              />
              <Input
                type="date"
                value={filters.checkOut}
                onChange={(e) => handleFilterChange("checkOut", e.target.value)}
                className="w-full border-0 p-0 focus:ring-0 focus:outline-none"
              />
            </div>

            {/* Guests */}
            <div className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
              <i
                className="icon-[hugeicons--user-group] size-5 text-gray-400"
                role="img"
                aria-hidden="true"
              />
              <Select
                value={filters.guests}
                onChange={(e) =>
                  handleFilterChange("guests", parseInt(e.target.value))
                }
                className="border-0 p-0 focus:ring-0 focus:outline-none bg-transparent min-w-[200px]"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num}>
                    {num} {num === 1 ? "huésped" : "huéspedes"}
                  </SelectItem>
                ))}
              </Select>
            </div>

            {/* Filters Button */}
            <Button
              onPress={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <i
                className="icon-[lucide--funnel] size-4"
                role="img"
                aria-hidden="true"
              />
              Filtros
            </Button>

            {/* Search Button */}
            <Button
              onPress={handleSearch}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
            >
              <i
                className="icon-[ci--search-magnifying-glass] size-4"
                role="img"
                aria-hidden="true"
              />
              Buscar
            </Button>
          </div>
        </div>

        {/* Extended Filters Panel */}
        {showFilters && (
          <div className="mt-4 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Tipo de alojamiento
                </label>
                <Select
                  value={filters.propertyType}
                  onChange={(e) =>
                    handleFilterChange("propertyType", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <SelectItem key="">Todos</SelectItem>
                  <SelectItem key="capsula">Cápsulas</SelectItem>
                  <SelectItem key="suite">Suites</SelectItem>
                  <SelectItem key="apartasuite">Apartasuites</SelectItem>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Precio por noche
                </label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Mín"
                    value={String(filters.priceRange[0]) || ""}
                    onChange={(e) =>
                      handleFilterChange("priceRange", [
                        parseInt(e.target.value) || 0,
                        filters.priceRange[1],
                      ])
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <Input
                    type="number"
                    placeholder="Máx"
                    value={
                      filters.priceRange[1] === 1000000
                        ? ""
                        : String(filters.priceRange[1])
                    }
                    onChange={(e) =>
                      handleFilterChange("priceRange", [
                        filters.priceRange[0],
                        parseInt(e.target.value) || 1000000,
                      ])
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Calificación
                </label>
                <Select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange("rating", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <SelectItem key="">Cualquiera</SelectItem>
                  <SelectItem key="4+">4+ estrellas</SelectItem>
                  <SelectItem key="3+">3+ estrellas</SelectItem>
                  <SelectItem key="2+">2+ estrellas</SelectItem>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Servicios
                </label>
                <div className="relative">
                  <Select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                    <SelectItem>
                      Ver servicios ({filters.amenities.length})
                    </SelectItem>
                  </Select>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="mt-6">
              <label className="text-sm font-medium mb-3 block text-gray-700">
                Servicios disponibles
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {amenityOptions.map((amenity) => (
                  <label
                    key={amenity.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Input
                      type="checkbox"
                      checked={filters.amenities.includes(amenity.value)}
                      onChange={() => handleAmenityChange(amenity.value)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">
                      {amenity.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Actions */}
            <div className="mt-6 flex gap-3">
              <Button
                onPress={() => {
                  setFilters({
                    location: "",
                    checkIn: "",
                    checkOut: "",
                    guests: 1,
                    propertyType: "",
                    priceRange: [0, 1000000],
                    rating: "",
                    amenities: [],
                  });
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Limpiar filtros
              </Button>
              <Button
                onPress={handleSearch}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all"
              >
                Aplicar filtros
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
