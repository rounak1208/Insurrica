import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { Home } from "@/pages/Home";
import { productData } from "@/lib/productData";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const InsuranceProductPage = lazy(() => import("@/pages/InsuranceProductPage").then(m => ({ default: m.InsuranceProductPage })));
const PlanDetailPage = lazy(() => import("@/pages/PlanDetailPage").then(m => ({ default: m.PlanDetailPage })));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-[#F8FAFC]">
          <Toaster position="top-center" richColors />
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/health-insurance" element={<InsuranceProductPage data={productData.health} />} />
              <Route path="/health-insurance/plans/:planId" element={<PlanDetailPage />} />
              <Route path="/motor-insurance" element={<InsuranceProductPage data={productData.motor} />} />
              <Route path="/term-life-insurance" element={<InsuranceProductPage data={productData.term} />} />
              <Route path="/life-insurance" element={<InsuranceProductPage data={productData.life} />} />
              <Route path="/home-insurance" element={<InsuranceProductPage data={productData.home} />} />
              <Route path="/travel-insurance" element={<InsuranceProductPage data={productData.travel} />} />
              <Route path="/business-insurance" element={<InsuranceProductPage data={productData.business} />} />
            </Routes>
          </Suspense>
          <Footer />
          <FloatingWidgets />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
