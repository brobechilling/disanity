import React, { useEffect } from "react";
import { BookingProvider } from "@/context/BookingContext";
import { AppRouter } from "@/router/AppRouter";

export default function App() {
  useEffect(() => {
    const handleResize = () => {
      // Use clientWidth to get the exact available width excluding the vertical scrollbar
      const clientWidth = document.documentElement.clientWidth;
      const scale = clientWidth / 1440;
      document.documentElement.style.setProperty("--figma-scale", scale.toString());
    };

    handleResize();

    // ResizeObserver monitors documentElement dimensions to catch scrollbar appearance and hide changes
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(document.documentElement);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <BookingProvider>
      <AppRouter />
    </BookingProvider>
  );
}
