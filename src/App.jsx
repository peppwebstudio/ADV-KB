import React from "react";
import Navbar from "./layouts/Navbar";
import GoldenThread from "./components/GoldenThread";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PracticeAreas from "./sections/PracticeAreas";
import WhyChooseUs from "./sections/WhyChooseUs";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background font-body text-foreground">
      
      {/* Indicador de progresso de leitura sutil nas bordas laterais */}
      <GoldenThread />
      
      {/* Navegação Global fixada */}
      <Navbar />

      <main className="flex-grow w-full">
        <Hero />
        <About />
        <PracticeAreas />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>

      {/* Rodapé institucional */}
      <Footer />
      
    </div>
  );
}

export default App;