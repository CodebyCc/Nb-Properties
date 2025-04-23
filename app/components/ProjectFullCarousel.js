import FullVhCarousel from "./FullVhCarousel";
import minimal1 from "../../public/minimal1.jpg";
import minimal2 from "../../public/minimal2.jpg";
import modern2 from "../../public/modern2.jpg";
import elegant from "../../public/elegan 6.jpeg";

import home2 from "../../public/IMG_9027.jpg";

const slidesProject = [
  {
    id: 3,
    title: "Minimalistic Contemporary Homes",
    // image: "/../../public/black-style.webp",
    image: minimal1,
    link: "/projects/#home3",
  },
  {
    id: 1,
    title: "Modern Luxe Homes",
    image: modern2,
    // image: "/../../public/black-style.webp",
    link: "/projects/#home1",
  },
  {
    id: 2,
    title: "Innovative Elegant Designs",
    image: elegant,

    link: "/projects/#home2",
  },
];
function ProjectFullCarousel() {
  return (
    <div className="hidden md:block">
      <FullVhCarousel slides={slidesProject} />
    </div>
  );
}

export default ProjectFullCarousel;
