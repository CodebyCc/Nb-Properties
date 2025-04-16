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

import home2 from "../../public/IMG_9027.jpg";

import minimal1 from "../../public/minimal1.jpg";
import minimal2 from "../../public/minimal2.jpg";
import modern2 from "../../public/modern2.jpg";

const slides = [
  {
    id: 3,
    title: "Minimalistic Contemporary Homes",
    // image: "/../../public/black-style.webp",
    image: minimal1,
    link: "#home3",
  },
  {
    id: 1,
    title: "Modern Luxe Homes",
    image: modern2,
    // image: "/../../public/black-style.webp",
    link: "#home1",
  },
  {
    id: 2,
    title: "Innovative Elegant Designs",
    image: home2,
    // image: "/../../public/seven.png",
    link: "#home2",
  },
];

const CoverCarousel = () => {
  return (
    <div className="md:bg-gray-900">
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
                <div className="absolute bottom-10 left-6 w-full  p-3 text-gray-200 rounded-b-lg animate-pulse">
                  <h3 className="text-4xl  hover:text-gray-800  ">
                    {slide.title}.
                  </h3>
                  <Link href={slide.link}>
                    <p className="text-lg text-gray-900 hover:text-amber-300">
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
};

export default CoverCarousel;
