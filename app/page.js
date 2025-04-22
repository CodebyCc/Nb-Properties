import Carousel from "./components/Carousel";
import FullVhCarousel from "./components/FullVhCarousel";
import Nav from "./components/Nav";
import Ourstory from "./components/Ourstory";
import ProjectCarousel from "./components/ProjectCarousel";
import Section from "./components/Section";
import ServicesCarousel from "./components/ServicesCarousel";

export default function Home() {
  return (
    <div>
      <FullVhCarousel />
      <Ourstory />
      <ServicesCarousel />

      {/* <Section /> */}
    </div>
  );
}
