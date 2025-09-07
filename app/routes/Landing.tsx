// src/routes/landing.tsx
import React from "react";
import Hero from "../pages/hero";
import Features from "../pages/features";
import Footer from "../pages/footer"
import Navigation from "../pages/navigation";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
        <main>
          {/* Hero Section */}
          <Hero />
          {/* Features Section */}
          <Features />
        </main>
       <Footer />
    </div>
  );
};

export default Landing;
