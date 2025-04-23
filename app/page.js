import FullVhCarousel from "./components/FullVhCarousel";

import Ourstory from "./components/Ourstory";
import ProjectCarousel from "./components/ProjectCarousel";

import ProjectFullCarousel from "./components/ProjectFullCarousel";
import ServicesFullCarousel from "./components/ServicesFullCarousel";

export default function Home() {
  return (
    <div>
      <ProjectCarousel />
      <ProjectFullCarousel />
      <Ourstory />
      <ServicesFullCarousel />
    </div>
  );
}
