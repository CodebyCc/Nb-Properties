import Section from "../components/Section";
import home2 from "../../public/IMG_9027.jpg";
import modern1 from "../../public/modern1.jpg";
import modern2 from "../../public/modern2.jpg";
import minimal2 from "../../public/minimal2.jpg";
import elegant from "../../public/elegant1.jpg";

const details = [
  {
    id: 1,
    heading: "Minimalistic Contemporary",
    content:
      "Less is more. In minimalistic contemporary design, simplicity creates space for elegance, allowing beauty to shine through in every detail. These designs are testament to our commitment to  clean lines, functional design, and a focus on quality materials.  We believe that less is more, and our homes are designed to create  a sense of calm and serenity. Our minimalist contemporary homes  are more than just simple and beautiful; they are functional,sustainable, easy build and designed to enhance the lives of our clients.",
    span: "Homes.",

    image: minimal2,
    link: "home3",
  },
  {
    id: 2,
    heading: "Modern Luxe ",
    content:
      "   Offering you the opportunity to live comfortably in a luxurious   yet affordable homes. Discover the perfect blend of elegance and   affordability with our luxurious homes that dont break the bank.   Experience high-end finishes, spacious layouts, and modern     amenities, all designed to provide you with a comfortable    lifestyle. Enjoy the sophistication of upscale living while staying within your budget. Your dream home awaits!",
    span: "Homes",

    image: modern1,
    // image: "/../../public/black-style.webp",
    link: "home1",
  },
  {
    id: 3,
    heading: "Innovative Elegant",
    span: "Designs",
    content:
      "  Explore our collection of innovative elegant designs that redefine style and functionality. Each piece is thoughtfully crafted to blend    modern aesthetics with timeless sophistication, ensuring that your   space reflects your unique taste. Experience the perfect harmony of    creativity and elegance, transforming any environment into a  masterpiece.",
    image: elegant,

    link: "home2",
  },
];

function page() {
  return (
    <>
      <Section details={details} />
    </>
  );
}

export default page;
