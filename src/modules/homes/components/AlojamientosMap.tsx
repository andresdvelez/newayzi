// components/alojamientos/AlojamientosMap.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Property } from "@/types/property";
import { useMapbox } from "../hooks/useMapbox";

interface AlojamientosMapProps {
  properties: Property[];
}

export const AlojamientosMap = ({ properties }: AlojamientosMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map = useRef<any>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const { mapboxgl, isLoaded } = useMapbox();

  useEffect(() => {
    if (!isLoaded || !mapboxgl || !mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-74.0817, 4.6097], // Bogotá coordinates
      zoom: 12,
      attributionControl: false,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      "top-right"
    );

    // Add markers for properties
    properties.forEach((property) => {
      // Create marker element
      const markerElement = document.createElement("div");
      markerElement.className = "property-marker";
      markerElement.innerHTML = `
        <div class="bg-white border-2 border-purple-600 rounded-lg px-3 py-2 shadow-lg cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-200 font-medium text-sm">
          $${property.price.toLocaleString()}
        </div>
      `;

      // Add click event to marker
      markerElement.addEventListener("click", () => {
        setSelectedProperty(property);
      });

      // Create and add marker
      new mapboxgl.Marker(markerElement)
        .setLngLat([property.coordinates.lng, property.coordinates.lat])
        .addTo(map.current);
    });

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [isLoaded, mapboxgl, properties]);

  // Update map when properties change
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    // Remove existing markers
    const existingMarkers = document.querySelectorAll(".property-marker");
    existingMarkers.forEach((marker) => marker.remove());

    // Add new markers
    properties.forEach((property) => {
      const markerElement = document.createElement("div");
      markerElement.className = "property-marker";
      markerElement.innerHTML = `
        <div class="bg-white border-2 border-purple-600 rounded-lg px-3 py-2 shadow-lg cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-200 font-medium text-sm">
          $${property.price.toLocaleString()}
        </div>
      `;

      markerElement.addEventListener("click", () => {
        setSelectedProperty(property);
      });

      new mapboxgl.Marker(markerElement)
        .setLngLat([property.coordinates.lng, property.coordinates.lat])
        .addTo(map.current);
    });

    // Fit map to show all properties
    if (properties.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      properties.forEach((property) => {
        bounds.extend([property.coordinates.lng, property.coordinates.lat]);
      });
      map.current.fitBounds(bounds, { padding: 50 });
    }
  }, [properties, isLoaded]);

  if (!isLoaded) {
    return (
      <div className="h-full bg-gray-100 flex items-center justify-center rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full relative">
      <div ref={mapContainer} className="w-full h-full rounded-lg" />

      {/* Property Popup */}
      {selectedProperty && (
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">
              {selectedProperty.name}
            </h3>
            <button
              onClick={() => setSelectedProperty(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            {selectedProperty.location}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                {selectedProperty.type}
              </span>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm text-gray-600">
                  {selectedProperty.rating}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-gray-900">
                ${selectedProperty.price.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">por noche</div>
            </div>
          </div>
          <button
            onClick={() =>
              window.open(`/room/${selectedProperty.id}`, "_blank")
            }
            className="w-full mt-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200"
          >
            Ver detalles
          </button>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
        <div className="text-xs text-gray-600 mb-2 font-medium">Leyenda</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-xs text-gray-600">Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-xs text-gray-600">No disponible</span>
          </div>
        </div>
      </div>

      {/* Properties Counter */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-200">
        <span className="text-sm font-medium text-gray-900">
          {properties.length}{" "}
          {properties.length === 1 ? "propiedad" : "propiedades"}
        </span>
      </div>
    </div>
  );
};
