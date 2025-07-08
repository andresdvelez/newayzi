import { AlojamientosFilters } from "@/modules/homes/components/AlojamientosFilters";
import { AlojamientosList } from "@/modules/homes/components/AlojamientosList";
import { AlojamientosMap } from "@/modules/homes/components/AlojamientosMap";
import { getProperties } from "@/modules/homes/services/propertyService";
import { Footer } from "@/modules/main/components/Footer";
import { Navigation } from "@/modules/main/components/Navigation";
import { Property } from "@/types/property";

interface AlojamientosPageProps {
  searchParams: Promise<{
    location?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    propertyType?: string;
    minPrice?: string;
    maxPrice?: string;
    rating?: string;
    amenities?: string;
  }>;
}

export default async function AlojamientosPage({
  searchParams,
}: AlojamientosPageProps) {
  const {
    location,
    checkIn,
    checkOut,
    guests,
    propertyType,
    minPrice,
    maxPrice,
    rating,
    amenities,
  } = await searchParams;

  // Convert searchParams to filters
  const filters = {
    location: location || "",
    checkIn: checkIn || "",
    checkOut: checkOut || "",
    guests: parseInt(guests || "1"),
    propertyType: propertyType || "",
    priceRange: [
      parseInt(minPrice || "0"),
      parseInt(maxPrice || "1000000"),
    ] as [number, number],
    rating: rating || "",
    amenities: amenities ? amenities.split(",") : [],
  };

  // Fetch properties server-side
  const properties: Property[] = await getProperties(filters);

  return (
    <div className="min-h-screen font-sora">
      <Navigation />
      <div className="pt-16">
        <AlojamientosFilters initialFilters={filters} />
        <div className="flex">
          <div className="w-3/5">
            <AlojamientosList properties={properties} />
          </div>
          <div className="w-2/5 sticky top-16 h-screen">
            <AlojamientosMap properties={properties} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
