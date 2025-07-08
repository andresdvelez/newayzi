export interface Property {
  id: string;
  name: string;
  location: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  features: string[];
  amenities: string[];
  favorite: boolean;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  availability: {
    checkIn: string;
    checkOut: string;
  };
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  size: number; // in square meters
}

export interface PropertyFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
  propertyType: string;
  rating: string;
  amenities: string[];
}

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  price: number;
  name: string;
  type: string;
}
