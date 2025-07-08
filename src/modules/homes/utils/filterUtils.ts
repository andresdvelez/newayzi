// utils/filterUtils.ts
import { Property, PropertyFilters } from "@/types/property";

export const filterProperties = (
  properties: Property[],
  filters: PropertyFilters
): Property[] => {
  return properties.filter((property) => {
    // Location filter
    if (
      filters.location &&
      !property.location
        .toLowerCase()
        .includes(filters.location.toLowerCase()) &&
      !property.name.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    // Property type filter
    if (
      filters.propertyType &&
      property.type.toLowerCase() !== filters.propertyType.toLowerCase()
    ) {
      return false;
    }

    // Guests filter
    if (filters.guests > property.maxGuests) {
      return false;
    }

    // Price range filter
    if (
      property.price < filters.priceRange[0] ||
      property.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Rating filter
    if (filters.rating) {
      const minRating = parseFloat(filters.rating.replace("+", ""));
      if (property.rating < minRating) {
        return false;
      }
    }

    // Amenities filter
    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity) =>
        property.amenities.includes(amenity)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }

    // Date availability filter (simplified - in real app would check actual availability)
    if (filters.checkIn && filters.checkOut) {
      const checkInDate = new Date(filters.checkIn);
      const checkOutDate = new Date(filters.checkOut);
      const availableFrom = new Date(property.availability.checkIn);
      const availableTo = new Date(property.availability.checkOut);

      if (checkInDate < availableFrom || checkOutDate > availableTo) {
        return false;
      }
    }

    return true;
  });
};

export const sortProperties = (
  properties: Property[],
  sortBy: "price" | "rating" | "name" = "price",
  order: "asc" | "desc" = "asc"
): Property[] => {
  return [...properties].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "price":
        comparison = a.price - b.price;
        break;
      case "rating":
        comparison = a.rating - b.rating;
        break;
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
    }

    return order === "asc" ? comparison : -comparison;
  });
};

export const getUniqueLocations = (properties: Property[]): string[] => {
  const locations = properties.map((p) => p.location);
  return [...new Set(locations)].sort();
};

export const getUniquePropertyTypes = (properties: Property[]): string[] => {
  const types = properties.map((p) => p.type);
  return [...new Set(types)].sort();
};

export const getPriceRange = (properties: Property[]): [number, number] => {
  if (properties.length === 0) return [0, 1000000];

  const prices = properties.map((p) => p.price);
  return [Math.min(...prices), Math.max(...prices)];
};

export const getAverageRating = (properties: Property[]): number => {
  if (properties.length === 0) return 0;

  const totalRating = properties.reduce((sum, p) => sum + p.rating, 0);
  return Math.round((totalRating / properties.length) * 10) / 10;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const calculateNights = (checkIn: string, checkOut: string): number => {
  if (!checkIn || !checkOut) return 0;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();

  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

export const calculateTotalPrice = (
  pricePerNight: number,
  checkIn: string,
  checkOut: string
): number => {
  const nights = calculateNights(checkIn, checkOut);
  return pricePerNight * nights;
};

export const isDateAvailable = (
  property: Property,
  checkIn: string,
  checkOut: string
): boolean => {
  if (!checkIn || !checkOut) return true;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const availableFrom = new Date(property.availability.checkIn);
  const availableTo = new Date(property.availability.checkOut);

  return checkInDate >= availableFrom && checkOutDate <= availableTo;
};

export const getPropertyTypeLabel = (type: string): string => {
  const labels: { [key: string]: string } = {
    capsula: "Cápsula",
    suite: "Suite",
    apartasuite: "Apartasuite",
    studio: "Studio",
    apartment: "Apartamento",
  };

  return labels[type.toLowerCase()] || type;
};

export const getAmenityLabel = (amenity: string): string => {
  const labels: { [key: string]: string } = {
    wifi: "WiFi gratuito",
    parking: "Estacionamiento",
    gym: "Gimnasio",
    pool: "Piscina",
    breakfast: "Desayuno incluido",
    ac: "Aire acondicionado",
    kitchen: "Cocina completa",
    kitchenette: "Kitchenette",
    washer: "Lavadora",
    dryer: "Secadora",
    balcony: "Balcón",
    terrace: "Terraza",
    "pet-friendly": "Mascotas permitidas",
    "24h-reception": "Recepción 24 horas",
    "room-service": "Servicio a la habitación",
    cleaning: "Servicio de limpieza",
    concierge: "Conserje",
    elevator: "Ascensor",
    accessible: "Accesible",
  };

  return labels[amenity.toLowerCase()] || amenity;
};
