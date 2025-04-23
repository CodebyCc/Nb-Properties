import FullVhCarousel from "./FullVhCarousel";
import mosby from "../../public/mosby.jpg";
import construc from "../../public/construc.jpg";

import supervision from "../../public/superv.jpeg";

const slidesServices = [
  {
    id: 3,
    title: "Building Procurement",
    // image: "/../../public/black-style.webp",
    image: construc,
    link: "/services/#home1",
  },
  {
    id: 1,
    title: "Architecture",
    image: mosby,
    // image: "/../../public/black-style.webp",
    link: "/services/#home3",
  },
  {
    id: 2,
    title: "Property Supervision",
    image: supervision,

    link: "/services#home2",
  },
];

function ServicesFullCarousel() {
  return (
    <div className="bg-gray-900">
      <h1 className="text-3xl pt-6  mb-4 text-center text-white  animate-pulse">
        Our Services
      </h1>
      <FullVhCarousel slides={slidesServices} />
    </div>
  );
}

export default ServicesFullCarousel;
