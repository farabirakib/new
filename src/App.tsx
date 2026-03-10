
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { Toaster } from "sonner";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

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
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;