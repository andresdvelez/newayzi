import { Property, PropertyFilters } from "@/types/property";

// Mock data - Replace with actual API calls
const mockProperties: Property[] = [
  {
    id: "1",
    name: "Cápsula Premium Centro",
    location: "Centro Histórico, Bogotá",
    type: "Cápsula",
    price: 75000,
    rating: 4.8,
    reviews: 124,
    image: "/images/room.png",
    images: ["/images/room.png", "/images/room.png", "/images/room.png"],
    features: ["WiFi", "A/C", "Desayuno"],
    amenities: ["wifi", "ac", "breakfast", "24h-reception"],
    favorite: false,
    description:
      "Cápsula moderna en el corazón del centro histórico de Bogotá. Perfecta para viajeros de negocios.",
    coordinates: {
      lat: 4.6097,
      lng: -74.0817,
    },
    availability: {
      checkIn: "2024-01-01",
      checkOut: "2024-12-31",
    },
    maxGuests: 1,
    bedrooms: 0,
    bathrooms: 1,
    size: 8,
  },
  {
    id: "2",
    name: "Suite Ejecutiva Zona Rosa",
    location: "Zona Rosa, Bogotá",
    type: "Suite",
    price: 150000,
    rating: 4.9,
    reviews: 89,
    image: "/images/room.png",
    images: ["/images/room.png", "/images/room.png", "/images/room.png"],
    features: ["WiFi", "Kitchenette", "Balcón"],
    amenities: ["wifi", "kitchenette", "balcony", "gym", "parking"],
    favorite: false,
    description:
      "Suite ejecutiva con vista panorámica en la exclusiva Zona Rosa. Ideal para estancias largas.",
    coordinates: {
      lat: 4.6533,
      lng: -74.0836,
    },
    availability: {
      checkIn: "2024-01-01",
      checkOut: "2024-12-31",
    },
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    size: 35,
  },
  {
    id: "3",
    name: "Apartasuite Familiar Chapinero",
    location: "Chapinero, Bogotá",
    type: "Apartasuite",
    price: 220000,
    rating: 4.7,
    reviews: 156,
    image: "/images/room.png",
    images: ["/images/room.png", "/images/room.png", "/images/room.png"],
    features: ["WiFi", "Cocina completa", "2 habitaciones"],
    amenities: ["wifi", "kitchen", "washer", "parking", "pet-friendly"],
    favorite: false,
    description:
      "Espacioso apartasuite familiar en el vibrante barrio de Chapinero. Perfecto para familias.",
    coordinates: {
      lat: 4.6252,
      lng: -74.0631,
    },
    availability: {
      checkIn: "2024-01-01",
      checkOut: "2024-12-31",
    },
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    size: 65,
  },
];

export async function getProperties(
  filters: PropertyFilters
): Promise<Property[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  let filteredProperties = [...mockProperties];

  // Apply filters
  if (filters.location) {
    filteredProperties = filteredProperties.filter(
      (property) =>
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase()) ||
        property.name.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  if (filters.propertyType) {
    filteredProperties = filteredProperties.filter(
      (property) =>
        property.type.toLowerCase() === filters.propertyType.toLowerCase()
    );
  }

  if (filters.guests > 0) {
    filteredProperties = filteredProperties.filter(
      (property) => property.maxGuests >= filters.guests
    );
  }

  if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000000) {
    filteredProperties = filteredProperties.filter(
      (property) =>
        property.price >= filters.priceRange[0] &&
        property.price <= filters.priceRange[1]
    );
  }

  if (filters.rating) {
    const minRating = parseFloat(filters.rating.replace("+", ""));
    filteredProperties = filteredProperties.filter(
      (property) => property.rating >= minRating
    );
  }

  if (filters.amenities.length > 0) {
    filteredProperties = filteredProperties.filter((property) =>
      filters.amenities.every((amenity) => property.amenities.includes(amenity))
    );
  }

  return filteredProperties;
}

export async function getProperty(id: string): Promise<Property | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const property = mockProperties.find((p) => p.id === id);
  return property || null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function toggleFavorite(id: string): Promise<boolean> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In a real app, this would make an API call to update the favorite status
  // For now, we'll just return success
  return true;
}

// TODO: Replace with actual API calls when backend is ready
/*
export async function getProperties(filters: PropertyFilters): Promise<Property[]> {
  const queryParams = new URLSearchParams();
  
  if (filters.location) queryParams.append('location', filters.location);
  if (filters.checkIn) queryParams.append('checkIn', filters.checkIn);
  if (filters.checkOut) queryParams.append('checkOut', filters.checkOut);
  if (filters.guests) queryParams.append('guests', filters.guests.toString());
  if (filters.propertyType) queryParams.append('propertyType', filters.propertyType);
  if (filters.priceRange[0] > 0) queryParams.append('minPrice', filters.priceRange[0].toString());
  if (filters.priceRange[1] < 1000000) queryParams.append('maxPrice', filters.priceRange[1].toString());
  if (filters.rating) queryParams.append('rating', filters.rating);
  if (filters.amenities.length > 0) queryParams.append('amenities', filters.amenities.join(','));

  const response = await fetch(`/api/properties?${queryParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  
  return response.json();
}
*/
