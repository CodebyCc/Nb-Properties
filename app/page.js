import Carousel from "./components/Carousel";
import CoverCarousel from "./components/CoverCarousel";
import Nav from "./components/Nav";
import Ourstory from "./components/Ourstory";
import Section from "./components/Section";

export default function Home() {
  return (
    <div>
      {/* <Carousel /> */}
      <CoverCarousel />
      <Ourstory />

      <Section />
    </div>
  );
}
