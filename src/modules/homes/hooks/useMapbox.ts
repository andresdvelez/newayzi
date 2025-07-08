/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useMapbox.ts
"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    mapboxgl: any;
  }
}

export const useMapbox = () => {
  const [mapboxgl, setMapboxgl] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Mapbox is already loaded
    if (window.mapboxgl) {
      setMapboxgl(window.mapboxgl);
      setIsLoaded(true);
      return;
    }

    // Load Mapbox GL JS
    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js";
    script.onload = () => {
      // Load CSS
      const link = document.createElement("link");
      link.href = "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      // Set access token (replace with your actual token)
      window.mapboxgl.accessToken =
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
        "pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example";

      setMapboxgl(window.mapboxgl);
      setIsLoaded(true);
    };

    script.onerror = () => {
      console.error("Failed to load Mapbox GL JS");
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return { mapboxgl, isLoaded };
};
