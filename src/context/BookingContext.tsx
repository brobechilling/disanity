import React, { createContext, useState, useContext, type ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";

export interface BookingItem {
  id: number;
  workshopId: string;
  title: string;
  price: number;
  unitPriceText: string;
  img: string;
  qty: number;
  genre: string;
  type: string;
  location: string;
  artisan: string;
  duration: string;
  date: string;
}

interface BookingContextType {
  cart: BookingItem[];
  addToCart: (item: BookingItem) => void;
  updateCartItemQty: (workshopId: string, qty: number) => void;
  removeFromCart: (workshopId: string) => void;
  clearCart: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [cart, setCart] = useState<BookingItem[]>([]);

  React.useEffect(() => {
    if (!isAuthenticated) {
      setCart([]);
    }
  }, [isAuthenticated]);

  const addToCart = (item: BookingItem) => {
    setCart((prev) => [...prev.filter((i) => i.workshopId !== item.workshopId), item]);
  };

  const updateCartItemQty = (workshopId: string, qty: number) => {
    setCart((prev) => prev.map((item) => (item.workshopId === workshopId ? { ...item, qty } : item)));
  };

  const removeFromCart = (workshopId: string) => {
    setCart((prev) => prev.filter((item) => item.workshopId !== workshopId));
  };

  const clearCart = () => setCart([]);

  return (
    <BookingContext.Provider value={{ cart, addToCart, updateCartItemQty, removeFromCart, clearCart }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
