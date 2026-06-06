import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-workshop" element={<CreateWorkshop />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/artisan-stories" element={<ArtisanStories />} />
        <Route path="/checkout/info" element={<CustomerInfo />} />
        <Route path="/checkout/payment" element={<CheckoutPayment />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/workshops/list" element={<WorkshopsList />} />
        <Route path="/workshops/detail" element={<WorkshopDetail />} />
        <Route path="/artisans/profile" element={<ArtisanProfile />} />
        <Route path="/artisan-stories/detail" element={<ArtisanStoryDetail />} />
        <Route path="/schedule-management" element={<ScheduleManagement />} />
        <Route path="/artisan-account" element={<ArtisanAccount />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/ticketqr" element={<TicketQr />} />
      </Routes>
    </BrowserRouter>
  );
};
