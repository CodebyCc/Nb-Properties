"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import Link from "next/link";

// const slides = [
//   { src: modern2, alt: "Slide 1" },
//   { src: minimal1, alt: "Slide 2" },
//   { src: minimal2, alt: "Slide 3" },
// ];

const FullVhCarousel = ({ slides }) => {
  return (
    <div className="h-screen w-full max-w-[1100px] ">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full  h-screen ">
              <Image
                src={slide.image}
                alt={slide.id}
                fill
                className="object-cover"
                priority
                quality={100}
              />
              {/* <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center p-4">
                <h2 className="text-xl font-semibold">{slide.alt}</h2>
              </div> */}
            </div>
            <div className="absolute bottom-48  md:bottom-16 left-6 w-full text-white p-3   rounded-b-lg animate-pulse ">
              <h3 className="text-3xl  hover:text-gray-800 motion-preset-slide-up-lg ">
                {slide.title}
              </h3>
              <Link href={slide.link}>
                <div className="bg-amber-600 max-w-36 rounded-lg motion-preset-slide-down-lg ">
                  <p className=" text-white text-center ">Read more...</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FullVhCarousel;

{
  /* <Grid>
{details.map((detail) => (
  <>
    <div
      id={detail.link}
      key={detail.id}
      className="mt-6 md:mt-0 motion-preset-slide-right-lg"
    >
      <div>
        <h1 className="text-center text-3xl md:text-4xl  mb-6 animate-pulse">
          {detail.heading}
          <span className="text-yellow-400"> {detail.span}</span>
        </h1>
      </div>

      <p className="pl-5 text-lg leading-relaxed ">
        {detail.content}
      </p>
    </div>
    <div className="relative -z-30 aspect-square motion-preset-slide-left-lg ">
      <Image
        src={detail.image}
        fill
        className="object-cover"
        alt="Logo Of Homeland Ghana"
      />
    </div>
  </>
))}
</Grid> */
}
