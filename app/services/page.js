import Grid from "../components/Grid";
import home1 from "../../public/IMG_9019.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Grid>
        <div className="mt">
          <h1 className="text-center text-6xl font-bold mb-6">
            Modern luxe <span className="text-yellow-400">Homes</span>
          </h1>
          <p className="pl-5 text-xl font-semibold tracking-widest animate-fadeIn ">
            Offering you the opportunity to live comfortably in a luxurious yet
            affordable homes. Discover the perfect blend of elegance and
            affordability with our luxurious homes that dont break the bank.
            Experience high-end finishes, spacious layouts, and modern
            amenities, all designed to provide you with a comfortable lifestyle.
            Enjoy the sophistication of upscale living while staying within your
            budget. Your dream home awaits!
          </p>
        </div>
        <div className=" relative -z-30 aspect-square ml-4">
          <Image
            src={home1}
            fill
            className="object-contain"
            alt="Logo Of Homeland Ghana"
          />
        </div>
      </Grid>
    </div>
  );
}

{
  /* <div>
      <h1 className="text-4xl mb-10 text-accent-400 font-medium text-center">
        Our Services
      </h1>
      <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            Modern luxe Homes
          </h1>

          <div className="space-y-8">
            <p>
              Offering you the opportunity to live comfortably in a luxurious
              yet affordable homes. Discover the perfect blend of elegance and
              affordability with our luxurious homes that don&apos;t break the
              bank. Experience high-end finishes, spacious layouts, and modern
              amenities, all designed to provide you with a comfortable
              lifestyle. Enjoy the sophistication of upscale living while
              staying within your budget. Your dream home awaits!
            </p>
            {/* <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace you&apos;ll find in the surrounding mountains. Wander
              through lush forests, breathe in the fresh air, and watch the
              stars twinkle above from the warmth of a campfire or your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down, relax, and
              feel the joy of being together in a beautiful setting.
            </p> */
}
//     </div>
//   </div>
//   <div className="col-span-2">
//     <img
//       src="/about-1.jpg"
//       alt="Family sitting around a fire pit in front of cabin"
//     />
//   </div>

//   <div className="col-span-2">
//     <img src="/about-2.jpg" alt="Family that manages The Wild Oasis" />
//   </div>

//   <div className="col-span-3">
//     <h1 className="text-4xl mb-10 text-accent-400 font-medium">
//       Innovative elegant designs
//     </h1>

//     <div className="space-y-8">
//       <p>
//         Explore our collection of innovative elegant designs that redefine
//         style and functionality. Each piece is thoughtfully crafted to
//         blend modern aesthetics with timeless sophistication, ensuring
//         that your space reflects your unique taste. Experience the perfect
//         harmony of creativity and elegance, transforming any environment
//         into a masterpiece.
//       </p>
//       {/* <p>
//         Over the years, we&apos;ve maintained the essence of The Wild
//         Oasis, blending the timeless beauty of the mountains with the
//         personal touch only a family business can offer. Here, you&apos;re
//         not just a guest; you&apos;re part of our extended family. So join
//         us at The Wild Oasis soon, where tradition meets tranquility, and
//         every visit is like coming home.
//       </p> */}

//       <div>
//         <a
//           href="/cabins"
//           className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
//         >
//           Explore our luxury cabins
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}

const style = {
  height: "30vh",
  width: "60vw",
  left: "120px",
  top: "2rem",
};
