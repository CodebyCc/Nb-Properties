import Image from "next/image";
import home1 from "../../public/IMG_9019.jpg";
import home2 from "../../public/IMG_9027.jpg";
import home3 from "../../public/IMG_9020.jpg";
import home4 from "../../public/minimalist.jpg";
import Grid from "./Grid";

function Section() {
  return (
    <div>
      <div>
        <Grid>
          <div>
            <h1 className=" mt-20 md:mt-0 text-center text-3xl md:text-6xl font-bold underline md:no-underline mb-6">
              Modern luxe <span className="text-yellow-400">Homes</span>
            </h1>
            <p className="pl-5 text-xl tracking-widest">
              Offering you the opportunity to live comfortably in a luxurious
              yet affordable homes. Discover the perfect blend of elegance and
              affordability with our luxurious homes that dont break the bank.
              Experience high-end finishes, spacious layouts, and modern
              amenities, all designed to provide you with a comfortable
              lifestyle. Enjoy the sophistication of upscale living while
              staying within your budget. Your dream home awaits!
            </p>
          </div>
          <div className="relative -z-30 aspect-square ml-8">
            <Image
              src={home3}
              fill
              className="object-contain"
              alt="Logo Of Homeland Ghana"
            />
          </div>
        </Grid>
      </div>
      <Grid>
        <div>
          <h1 className="text-center underline md:no-underline text-3xl md:text-6xl font-bold mb-6 ">
            Innovative Elegant <span className="text-yellow-400">Designs</span>
          </h1>
          <p className="pl-5 text-xl  tracking-widest">
            Explore our collection of innovative elegant designs that redefine
            style and functionality. Each piece is thoughtfully crafted to blend
            modern aesthetics with timeless sophistication, ensuring that your
            space reflects your unique taste. Experience the perfect harmony of
            creativity and elegance, transforming any environment into a
            masterpiece.
          </p>
        </div>
        <div className="relative -z-30 aspect-square ml-4 ">
          <Image
            src={home2}
            fill
            className="object-contain"
            alt="Logo Of Homeland Ghana"
          />
        </div>
      </Grid>
      <Grid>
        <div className="mt-6 md:mt-0">
          <h1 className="text-center underline md:no-underline text-3xl md:text-4xl font-bold mb-6">
            Minimalistic Contemporary
            <span className="text-yellow-400"> Homes</span>
          </h1>
          <p className="pl-5 text-xl  tracking-widest">
            Less is more. In minimalistic contemporary design, simplicity
            creates space for elegance, allowing beauty to shine through in
            every detail.
          </p>
        </div>
        <div className="relative -z-30 aspect-square ml-4 ">
          <Image
            src={home4}
            fill
            className="object-cover"
            alt="Image of minimalistic house"
          />
        </div>
      </Grid>
    </div>
  );
}

export default Section;
