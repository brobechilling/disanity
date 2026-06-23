import React, { createContext, useState, useContext, type ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { bookingsRepository } from "@/repositories/bookings.repository";


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

export interface ConfirmedBookingItem extends BookingItem {
  bookingId: string;
  confirmedAt: string;
}

interface BookingContextType {
  cart: BookingItem[];
  confirmedBookings: ConfirmedBookingItem[];
  addToCart: (item: BookingItem) => void;
  updateCartItemQty: (workshopId: string, qty: number) => void;
  updateConfirmedBookingQty: (bookingId: string, qty: number) => void;
  removeFromCart: (workshopId: string) => void;
  clearCart: () => void;
  confirmCart: () => Promise<void>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const [cart, setCart] = useState<BookingItem[]>([]);
  const [confirmedBookings, setConfirmedBookings] = useState<ConfirmedBookingItem[]>([]);

  React.useEffect(() => {
    if (!isAuthenticated || !user?.id) {
      setCart([]);
      setConfirmedBookings([]);
      return;
    }

    let isMounted = true;
    bookingsRepository.getBookingsByUserId(user.id)
      .then((data) => {
        if (isMounted) {
          setConfirmedBookings(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load user bookings from database:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, user]);

  const addToCart = (item: BookingItem) => {
    setCart((prev) => [...prev.filter((i) => i.workshopId !== item.workshopId), item]);
  };

  const updateCartItemQty = (workshopId: string, qty: number) => {
    setCart((prev) => prev.map((item) => (item.workshopId === workshopId ? { ...item, qty } : item)));
  };

  const updateConfirmedBookingQty = (bookingId: string, qty: number) => {
    setConfirmedBookings((prev) =>
      prev.map((item) => (item.bookingId === bookingId ? { ...item, qty } : item))
    );
  };

  const removeFromCart = (workshopId: string) => {
    setCart((prev) => prev.filter((item) => item.workshopId !== workshopId));
  };

  const clearCart = () => setCart([]);

  const confirmCart = async () => {
    if (cart.length === 0) {
      return;
    }

    const confirmedAt = new Date().toISOString();
    const bookingBatch = Date.now();
    const completedBookings = cart.map((item, index) => ({
      ...item,
      bookingId: `${item.workshopId}-${bookingBatch}-${index}`,
      confirmedAt,
    }));

    if (user?.id) {
      try {
        for (const booking of completedBookings) {
          await bookingsRepository.createBooking(booking, user.id);
        }
      } catch (error) {
        console.error("Failed to save bookings to database:", error);
      }
    }

    setConfirmedBookings((prev) => [...prev, ...completedBookings]);
    setCart([]);
  };

  return (
    <BookingContext.Provider
      value={{
        cart,
        confirmedBookings,
        addToCart,
        updateCartItemQty,
        updateConfirmedBookingQty,
        removeFromCart,
        clearCart,
        confirmCart,
      }}
    >
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
