import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/Carousel';
import HomeSection from './components/HomeSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageCarousel />
      <HomeSection />
      <ProductsSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
