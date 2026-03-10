
import { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

// AOS এবং CSS ইম্পোর্ট
import AOS from "aos";
import "aos/dist/aos.css";

import { Toaster } from "sonner";
import FooterPage from "./components/layout/footer/FooterPage";
import HeaderPage from "./components/layout/header/HeaderPage";
import HomePage from "./pages/home/HomePage";
import ServicesPage from "./pages/services/ServicePage";
import ContactPage from "./pages/contact/ContactPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import AboutPage from "./pages/about/AboutPage";

const MainLayout = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
  );
};

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
  
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-in-out",
      delay: 100, 
      offset: 100, 
    });

    
    AOS.refresh();
  }, [pathname]);

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div className="app-container bg-black min-h-screen flex flex-col">
      <main className={`flex-grow ${!isDashboard ? "pt-20 mb-10" : ""}`}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;