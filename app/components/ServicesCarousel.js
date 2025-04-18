"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  Navigation,
  EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import architect from "../../public/architect.jpg";
import mason from "../../public/mason.jpg";
import modern2 from "../../public/modern2.jpg";

import supervision from "../../public/superv.jpeg";
import procure from "../../public/procure.jpeg";

const slides = [
  {
    id: 3,
    title: "Building Procurement",
    // image: "/../../public/black-style.webp",
    image: mason,
    link: "/services/#home1",
  },
  {
    id: 1,
    title: "Architecture",
    image: procure,
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

function ServicesCarousel() {
  return (
    <div className="bg-gray-900">
      <h1 className="text-4xl  mb-4 text-center text-white animate-pulse">
        Our Services
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full h-[400px] overflow-hidden"
          // className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-[400px]">
              <div className="relative w-full h-full cursor-pointer">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  // layout="md:fill"
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute bottom-10 left-6 w-full  p-3 text-gray-950 rounded-b-lg animate-pulse">
                  <h3 className="text-4xl  hover:text-gray-800  ">
                    {slide.title}.
                  </h3>
                  <Link href={slide.link}>
                    <p className="text-lg text-amber-300 hover:text-amber-300">
                      Read more...
                    </p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ServicesCarousel;
