import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import flattened page components
import Home from "@/pages/Home";
import CreateWorkshop from "@/pages/CreateWorkshop";
import Artisans from "@/pages/Artisans";
import Cart from "@/pages/Cart";
import ArtisanStories from "@/pages/ArtisanStories";
import CustomerInfo from "@/pages/CustomerInfo";
import Success from "@/pages/Success";
import Workshops from "@/pages/Workshops";
import WorkshopsList from "@/pages/WorkshopsList";

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
        <Route path="/checkout/success" element={<Success />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshops/list" element={<WorkshopsList />} />
      </Routes>
    </BrowserRouter>
  );
};
