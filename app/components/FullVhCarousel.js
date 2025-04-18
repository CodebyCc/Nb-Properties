"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  { src: "/images/slide1.jpg", alt: "Slide 1" },
  { src: "/images/slide2.jpg", alt: "Slide 2" },
  { src: "/images/slide3.jpg", alt: "Slide 3" },
];

const FullVhCarousel = () => {
  return (
    <div className="h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center p-4">
                <h2 className="text-xl font-semibold">{slide.alt}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FullVhCarousel;
