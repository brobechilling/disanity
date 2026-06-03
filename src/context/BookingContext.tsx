import React, { createContext, useState, useContext, type ReactNode } from 'react';

interface BookingItem {
  workshopId: string;
  workshopTitle: string;
  price: number;
  date: string;
  participants: number;
}

interface BookingContextType {
  cart: BookingItem[];
  addToCart: (item: BookingItem) => void;
  removeFromCart: (workshopId: string) => void;
  clearCart: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<BookingItem[]>([]);

  const addToCart = (item: BookingItem) => {
    setCart((prev) => [...prev.filter((i) => i.workshopId !== item.workshopId), item]);
  };

  const removeFromCart = (workshopId: string) => {
    setCart((prev) => prev.filter((item) => item.workshopId !== workshopId));
  };

  const clearCart = () => setCart([]);

  return (
    <BookingContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
