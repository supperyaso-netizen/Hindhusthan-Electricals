import useScrollReveal from "../hooks/useScrollReveal";
import Hero from "../components/Hero";
import About from "../components/About";
import StatsReel from "../components/StatsReel";
import Brands from "../components/Brands";
import Gallery from "../components/Gallery";
import ShopExperience from "../components/ShopExperience";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Location from "../components/Location";

export default function HomePage() {
  useScrollReveal();

  return (
    <main id="top">
      <Hero />
      <About />
      <StatsReel />
      <Brands />
      <Gallery />
      <ShopExperience />
      <Testimonials />
      <WhyChooseUs />
      <Location />
    </main>
  );
}