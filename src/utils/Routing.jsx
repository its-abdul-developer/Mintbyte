import React from "react";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import OurService from "../Pages/OurService";
import KYC from "../Pages/KYC";
import PartnerWithUs from "../Pages/PartnerWithUs";
import Insights from "../Pages/Insights";
import Resources from "../Pages/Resources";
import Contact from "../Pages/Contact";
import ServiceDetails from "../components/Our Services/ServiceDetails";
import InsightsDetails from "../components/Insights/InsightsDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<OurService />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />

      <Route path="/kyc" element={<KYC />} />
      <Route path="/partnerwithus" element={<PartnerWithUs />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/:slug" element={<InsightsDetails />} />

      <Route path="/resources" element={<Resources />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routing;
