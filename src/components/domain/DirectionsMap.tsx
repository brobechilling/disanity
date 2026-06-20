import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapPin,
  ExternalLink,
  AlertCircle,
  Locate,
  Loader2,
} from "lucide-react";
import Section from "@/components/common/Section";

// Get destination coordinates and details from environment variables with fallbacks
const DEST_LAT = parseFloat(import.meta.env.VITE_DEST_LAT || "15.877226");
const DEST_LNG = parseFloat(import.meta.env.VITE_DEST_LNG || "108.300221");
const DEST_NAME = import.meta.env.VITE_DEST_NAME || "Làng gốm Thanh Hà";
const OSRM_ROUTE_API = import.meta.env.VITE_OSRM_ROUTE_API || "https://router.project-osrm.org/route/v1/driving/";

// Fallback start location (Hoi An Ancient Town center)
const FALLBACK_LAT = 15.8771;
const FALLBACK_LNG = 108.3262;
const FALLBACK_NAME = "Phố cổ Hội An (Mặc định)";

interface RouteStep {
  maneuver: {
    instruction: string;
    type: string;
  };
  distance: number;
  duration: number;
}

export default function DirectionsMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerGroupRef = useRef<L.LayerGroup | null>(null);
  const routeLineRef = useRef<L.Polyline | null>(null);

  const [startPoint, setStartPoint] = useState<{ lat: number; lng: number; name: string; isFallback: boolean }>({
    lat: FALLBACK_LAT,
    lng: FALLBACK_LNG,
    name: FALLBACK_NAME,
    isFallback: true,
  });

  const [isLocating, setIsLocating] = useState(false);
  const [routeInfo, setRouteInfo] = useState<{
    distance: string;
    duration: string;
    steps: RouteStep[];
  } | null>(null);
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const [mapReady, setMapReady] = useState(false);

  // Geolocation Handler
  const handleLocateUser = () => {
    setIsLocating(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Trình duyệt của bạn không hỗ trợ định vị. Đang sử dụng vị trí mặc định.");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setStartPoint({
          lat: latitude,
          lng: longitude,
          name: "Vị trí hiện tại của bạn",
          isFallback: false,
        });
        setIsLocating(false);
      },
      (err) => {
        console.error(err);
        let msg = "Không thể lấy vị trí hiện tại. Đang sử dụng vị trí xuất phát từ Phố cổ Hội An.";
        if (err.code === err.PERMISSION_DENIED) {
          msg = "Quyền truy cập vị trí bị từ chối. Đang hiển thị đường đi từ Phố cổ Hội An.";
        }
        setError(msg);
        setStartPoint({
          lat: FALLBACK_LAT,
          lng: FALLBACK_LNG,
          name: FALLBACK_NAME,
          isFallback: true,
        });
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [DEST_LAT, DEST_LNG],
      zoom: 14,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapRef.current = map;
    markerGroupRef.current = L.layerGroup().addTo(map);
    setMapReady(true);

    // Auto locate user on mount
    handleLocateUser();

    // Force recalculate map size on next tick to avoid grey/empty tile area
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 300);

    // Clean up on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        setMapReady(false);
      }
    };
  }, []);

  // Update Route when starting point changes
  useEffect(() => {
    if (!mapReady || !mapRef.current || !markerGroupRef.current) return;

    let active = true;

    const fetchRoute = async () => {
      setIsLoadingRoute(true);
      setError(null);
      try {
        // Fetch OSRM Route
        const url = `${OSRM_ROUTE_API}${startPoint.lng},${startPoint.lat};${DEST_LNG},${DEST_LAT}?overview=full&geometries=geojson&steps=true`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Không tìm thấy tuyến đường.");

        const data = await res.json();
        if (data.code !== "Ok" || !data.routes || data.routes.length === 0) {
          throw new Error("Không thể tính toán đường đi. Vị trí của bạn có thể quá xa.");
        }

        if (!active) return;

        // Forcefully remove any existing polyline/routing layer from the map
        mapRef.current!.eachLayer((layer) => {
          if (layer instanceof L.Polyline) {
            layer.remove();
          }
        });

        // Clear old markers from the map
        markerGroupRef.current?.clearLayers();
        if (routeLineRef.current) {
          routeLineRef.current = null;
        }

        // 1. Create custom markers
        const startIcon = L.divIcon({
          html: `<div class="flex items-center justify-center w-8 h-8 rounded-full bg-[#59A29C] text-white shadow-lg border-2 border-white">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                     <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                   </svg>
                 </div>`,
          className: "",
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const destIcon = L.divIcon({
          html: `<div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#A6341B] text-white shadow-xl border-2 border-[#f5efe6] relative">
                   <div class="absolute inset-0 rounded-full bg-[#A6341B] opacity-50 animate-ping"></div>
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" class="relative z-10">
                     <path d="M8 0a5.53 5.53 0 0 0-5.4 6c0 3.75 4.5 9.2 5.07 9.87a.5.5 0 0 0 .66 0c.57-.67 5.07-6.12 5.07-9.87A5.53 5.53 0 0 0 8 0zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                   </svg>
                 </div>`,
          className: "",
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        });

        // Add markers
        L.marker([startPoint.lat, startPoint.lng], { icon: startIcon })
          .bindPopup(`<b>Điểm xuất phát:</b><br>${startPoint.name}`)
          .addTo(markerGroupRef.current!);

        L.marker([DEST_LAT, DEST_LNG], { icon: destIcon })
          .bindPopup(`<b>Điểm đến:</b><br>${DEST_NAME}`)
          .addTo(markerGroupRef.current!)
          .openPopup();

        const route = data.routes[0];
        const coordinates = route.geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]] as [number, number]);

        // Draw Route Line
        routeLineRef.current = L.polyline(coordinates, {
          color: "#A6341B",
          weight: 6,
          opacity: 0.8,
          lineJoin: "round",
          lineCap: "round",
        }).addTo(mapRef.current!);

        // Force recalculate container bounds before fitting path to view
        mapRef.current!.invalidateSize();

        // Fit map bounds
        mapRef.current!.fitBounds(routeLineRef.current.getBounds(), {
          padding: [50, 50],
        });

        // Set route info
        const distKm = (route.distance / 1000).toFixed(1);
        const durationMin = Math.round(route.duration / 60);
        let durationText = `${durationMin} phút`;
        if (durationMin >= 60) {
          const hours = Math.floor(durationMin / 60);
          const mins = durationMin % 60;
          durationText = `${hours} giờ ${mins > 0 ? `${mins} phút` : ""}`;
        }

        setRouteInfo({
          distance: `${distKm} km`,
          duration: durationText,
          steps: route.legs[0]?.steps || [],
        });
      } catch (err) {
        if (!active) return;
        console.error(err);
        const errMsg = err instanceof Error ? err.message : "Lỗi tính toán lộ trình.";
        setError(errMsg);
        // Center on destination on fail
        mapRef.current?.setView([DEST_LAT, DEST_LNG], 13);
      } finally {
        if (active) {
          setIsLoadingRoute(false);
        }
      }
    };

    fetchRoute();

    return () => {
      active = false;
    };
  }, [startPoint, mapReady]);

  // Get external map links
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${startPoint.lat},${startPoint.lng}&destination=${DEST_LAT},${DEST_LNG}&travelmode=driving`;
  const appleMapsUrl = `https://maps.apple.com/?saddr=${startPoint.lat},${startPoint.lng}&daddr=${DEST_LAT},${DEST_LNG}&dirflg=d`;

  return (
    <Section width="wide" className="py-16 lg:py-20 font-beVietnamPro">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[#A6341B] font-bold text-xs uppercase tracking-[0.2em] block mb-3">
          Bản Đồ Hành Trình
        </span>
        <h2 className="font-dFVNFreckleFace text-[36px] sm:text-[48px] text-[#A6341B] leading-none mb-4">
          Đường Đến Làng Gốm
        </h2>
        <p className="text-[#5A4635] text-base sm:text-lg leading-relaxed font-medium">
          Xem chỉ đường chi tiết từ vị trí hiện tại của bạn đến {DEST_NAME} để bắt đầu buổi trải nghiệm của mình.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.9fr] lg:items-stretch">
        
        {/* Controls Panel */}
        <div className="flex flex-col justify-between bg-white/70 backdrop-blur-md rounded-2xl shadow-[0_8px_24px_rgba(71,45,24,0.04)] border border-[#d8cbb5] p-6 lg:p-8">
          <div>
            <h3 className="font-bold text-lg text-[#A6341B] mb-5 font-beVietnamPro">
              Thông tin hành trình
            </h3>

            {/* Point A -> Point B Indicator */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center mt-1 shrink-0">
                  <div className="w-5 h-5 rounded-full border-2 border-[#59A29C] bg-white flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#59A29C]"></div>
                  </div>
                  <div className="w-0.5 h-12 bg-dashed border-l border-dashed border-[#ccc] my-1"></div>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase font-black tracking-widest text-[#9c8979]">
                    Điểm khởi đầu
                  </p>
                  <p className="text-sm font-bold text-[#4A3728] mt-1 line-clamp-2">
                    {startPoint.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full border-2 border-[#A6341B] bg-white flex items-center justify-center mt-1 shrink-0">
                  <MapPin size={12} className="text-[#A6341B]" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase font-black tracking-widest text-[#9c8979]">
                    Điểm đến
                  </p>
                  <p className="text-sm font-bold text-[#A6341B] mt-1">
                    {DEST_NAME}
                  </p>
                </div>
              </div>
            </div>

            {/* Locate Me Action */}
            <button
              type="button"
              onClick={() => handleLocateUser()}
              disabled={isLocating}
              className="w-full mb-6 inline-flex items-center justify-center gap-2 border-2 border-[#59A29C] hover:bg-[#59A29C] hover:text-white text-[#59A29C] font-bold text-sm py-3 px-4 rounded-xl transition-all disabled:opacity-60 cursor-pointer active:scale-95"
            >
              {isLocating ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Locate size={18} />
              )}
              {startPoint.isFallback ? "Định vị vị trí của tôi" : "Cập nhật vị trí hiện tại"}
            </button>

            {/* Error / Fallback Message */}
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-[#faf1ed] border border-[#f5dbd2] text-xs text-[#A6341B] flex items-start gap-2">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* Route Stats & Navigation Links */}
          <div className="border-t border-[#d8cbb5]/60 pt-6 mt-4">
            {isLoadingRoute ? (
              <div className="flex flex-col items-center py-6">
                <Loader2 size={24} className="animate-spin text-[#A6341B]" />
                <p className="text-xs text-[#9c8979] mt-2">Đang vẽ tuyến đường...</p>
              </div>
            ) : routeInfo ? (
              <div>
                {/* Distance & Time */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/50 p-3 rounded-lg text-center border border-[#d8cbb5]/50">
                    <p className="text-[10px] uppercase font-black tracking-wider text-[#9c8979]">
                      Khoảng cách
                    </p>
                    <p className="text-lg font-black text-[#A6341B] mt-1">
                      {routeInfo.distance}
                    </p>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg text-center border border-[#d8cbb5]/50">
                    <p className="text-[10px] uppercase font-black tracking-wider text-[#9c8979]">
                      Thời gian di chuyển
                    </p>
                    <p className="text-lg font-black text-[#A6341B] mt-1">
                      {routeInfo.duration}
                    </p>
                  </div>
                </div>

                {/* External Navigation Links */}
                <div className="space-y-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#A6341B] hover:bg-[#8e2913] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md shadow-[#a6341b]/10 cursor-pointer active:scale-[0.98]"
                  >
                    Xem trên Google Maps
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-[#d8cbb5] hover:bg-white/80 text-[#4A3728] font-bold text-sm py-3 px-4 rounded-xl transition-all cursor-pointer active:scale-[0.98]"
                  >
                    Xem trên Apple Maps
                    <ExternalLink size={14} />
                  </a>
                </div>


              </div>
            ) : (
              <p className="text-xs text-center text-[#9c8979]">
                Không thể tính toán đường đi.
              </p>
            )}
          </div>
        </div>

        {/* Interactive Leaflet Map Container */}
        <div className="relative h-[350px] lg:h-auto min-h-[400px] bg-[#e6dec9] rounded-2xl overflow-hidden border border-[#d8cbb5] shadow-md shadow-[rgba(71,45,24,0.03)]">
          <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full" />
          
          {/* Custom Overlay loading indicator */}
          {isLoadingRoute && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-[999] flex items-center justify-center">
              <div className="bg-[#fcfaf7] px-6 py-4 rounded-2xl shadow-lg border border-[#e6dec9] flex items-center gap-3">
                <Loader2 size={18} className="animate-spin text-[#A6341B]" />
                <span className="text-xs font-bold text-[#4A3728]">Đang tính toán tuyến đường...</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </Section>
  );
}
