import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { Home } from "@/pages/Home";
import { InsuranceProductPage } from "@/pages/InsuranceProductPage";
import { productData } from "@/lib/productData";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8FAFC]">
        <Toaster position="top-center" richColors />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health-insurance" element={<InsuranceProductPage data={productData.health} />} />
          <Route path="/motor-insurance" element={<InsuranceProductPage data={productData.motor} />} />
          <Route path="/term-life-insurance" element={<InsuranceProductPage data={productData.term} />} />
          <Route path="/life-insurance" element={<InsuranceProductPage data={productData.life} />} />
          <Route path="/home-insurance" element={<InsuranceProductPage data={productData.home} />} />
          <Route path="/travel-insurance" element={<InsuranceProductPage data={productData.travel} />} />
          <Route path="/business-insurance" element={<InsuranceProductPage data={productData.business} />} />
        </Routes>
        <Footer />
        <FloatingWidgets />
      </div>
    </BrowserRouter>
  );
}

export default App;
