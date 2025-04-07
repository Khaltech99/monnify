import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Checkout from "./pages/checkout-demo.jsx";
import OfflinePayment from "./pages/offline-payment.jsx";
import Pricing from "./pages/pricing.jsx";
import Documentation from "./pages/documentation.jsx";
import Contact from "./pages/contact.jsx";
import NavBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout-offline" element={<Checkout />} />
        <Route path="/offline-payment" element={<OfflinePayment />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
