import useScrollReveal from "../hooks/useScrollReveal";
import Hero from "../components/Hero";
import About from "../components/About";
import StatsCounter from "../components/StatsCounter";
import Brands from "../components/Brands";
import Gallery from "../components/Gallery";
import ShopExperience from "../components/ShopExperience";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Location from "../components/Location";
import FinalCTA from "../components/FinalCTA";

export default function HomePage() {
  useScrollReveal();

  return (
    <main id="top">
      <Hero />
      <About />
      <StatsCounter />
      <Brands />
      <Gallery />
      <ShopExperience />
      <Testimonials />
      <WhyChooseUs />
      <Location />
      <FinalCTA />
    </main>
  );
}
