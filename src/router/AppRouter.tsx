import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RequireAuth from "@/components/auth/RequireAuth";
import { trackPageView } from "@/lib/googleAnalytics";

// Import flattened page components
import Home from "@/pages/Home";
import CreateWorkshop from "@/pages/CreateWorkshop";
import Artisans from "@/pages/Artisans";
import Cart from "@/pages/Cart";
import ArtisanStories from "@/pages/ArtisanStories";
import CustomerInfo from "@/pages/CustomerInfo";
import CheckoutPayment from "@/pages/CheckoutPayment";
import Success from "@/pages/Success";
import Workshops from "@/pages/Workshops";
import Booking from "@/pages/Booking";
import WorkshopsList from "@/pages/WorkshopsList";
import WorkshopDetail from "@/pages/WorkshopDetail";
import ArtisanProfile from "@/pages/ArtisanProfile";
import ArtisanStoryDetail from "@/pages/ArtisanStoryDetail";
import ScheduleManagement from "@/pages/ScheduleManagement";
import ArtisanAccount from "@/pages/ArtisanAccount";
import UserAccount from "@/pages/UserAccount";
import TicketQr from "@/pages/TicketQr";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalyticsTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-workshop" element={<CreateWorkshop />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route
          path="/cart"
          element={
            <RequireAuth background="cart">
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/artisan-stories" element={<ArtisanStories />} />
        <Route
          path="/checkout/info"
          element={
            <RequireAuth background="cart">
              <CustomerInfo />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout/payment"
          element={
            <RequireAuth background="payment">
              <CheckoutPayment />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout/success"
          element={
            <RequireAuth background="success">
              <Success />
            </RequireAuth>
          }
        />
        <Route path="/workshops" element={<Workshops />} />
        <Route
          path="/booking"
          element={
            <RequireAuth background="booking">
              <Booking />
            </RequireAuth>
          }
        />
        <Route path="/workshops/list" element={<WorkshopsList />} />
        <Route path="/workshops/detail" element={<WorkshopDetail />} />
        <Route path="/artisans/profile" element={<ArtisanProfile />} />
        <Route path="/artisan-stories/detail" element={<ArtisanStoryDetail />} />
        <Route path="/schedule-management" element={<ScheduleManagement />} />
        <Route
          path="/artisan-account"
          element={
            <RequireAuth background="artisanAccount">
              <ArtisanAccount />
            </RequireAuth>
          }
        />
        <Route
          path="/user-account"
          element={
            <RequireAuth>
              <UserAccount />
            </RequireAuth>
          }
        />
        <Route path="/ticketqr" element={<TicketQr />} />
      </Routes>
    </BrowserRouter>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

const GoogleAnalyticsTracker: React.FC = () => {
  const { pathname, search, hash } = useLocation();
  const page = `${pathname}${search}${hash}`;
  const lastTrackedPage = React.useRef<string | null>(null);

  React.useEffect(() => {
    if (lastTrackedPage.current === page) {
      return;
    }

    lastTrackedPage.current = page;
    trackPageView(page);
  }, [page]);

  return null;
};
