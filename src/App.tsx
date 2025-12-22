import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Benefits } from "./sections/Benefits";
import { MenuSection } from "./sections/Menu";
import { HowItWorks } from "./sections/HowItWorks";
import { Footer } from "./sections/Footer";
import { Testimonials } from "./sections/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <MenuSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;