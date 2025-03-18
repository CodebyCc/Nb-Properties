import Image from "next/image";
import home1 from "../../public/IMG_9019.jpg";
import home2 from "../../public/IMG_9027.jpg";
import home3 from "../../public/IMG_9019.jpg";
import Link from "next/link";

function Carousel() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={home1} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide4" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide2" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={home2} className="w-full" alt={""} />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image src={home3} className="w-full" alt="" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide2" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide4" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src={home1}
          height={10}
          width={20}
          alt="Logo Of Homeland Ghana"
        />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide3" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide1" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
