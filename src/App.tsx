import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceCategories from './components/ServiceCategories';
import CaseGallery from './components/CaseGallery';
import PricingPlans from './components/PricingPlans';
import ServiceFlow from './components/ServiceFlow';
import ConsultationInfo from './components/ConsultationInfo';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <CaseGallery activeCategory={activeCategory} />
        <PricingPlans />
        <ServiceFlow />
        <ConsultationInfo />
        <ContactSection />
      </main>
      {/* Floating contact button - mobile only */}
      <a href="#contact" className="floating-contact">
        <span className="floating-contact__icon">💬</span>
        <span className="floating-contact__text">微信咨询</span>
      </a>
      <Footer />
    </div>
  );
}
