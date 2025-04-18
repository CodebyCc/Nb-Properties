import Grid from "../components/Grid";
import home1 from "../../public/IMG_9019.jpg";

import home2 from "../../public/architect.jpg";
import home3 from "../../public/mason.jpg";
import supervision from "../../public/supervision.webp";

import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Grid>
        <div id="home1" className="mt-2 motion-preset-slide-right-lg ">
          <h1 className="text-center text-4xl  mb-6">Building Procurement</h1>
          <p className="pl-5 text-xl tracking-widest animate-fadeIn ">
            Effective building procurement is the foundation of successful
            construction; it ensures quality materials, timely delivery, and
            cost efficiency, paving the way for a project’s success. When it
            comes to building projects, Nb properties has specialists on hotline
            to give you the value for money, provide quality sourcing services.
          </p>
        </div>
        <div className=" relative -z-30 aspect-square ml-4 motion-preset-slide-left-lg">
          <Image
            src={home3}
            fill
            className="object-contain"
            alt="Logo Of Homeland Ghana"
          />
        </div>
      </Grid>
      <Grid>
        <div id="home3" className="mt motion-preset-slide-right-lg">
          <h1 className="text-center text-4xl  mb-6">Architecture</h1>
          <p className="pl-5 text-xl tracking-widest ">
            Architecture is the art of creating spaces that inspire, first stage
            to bring dreams into reality while supervision ensures quality
            assurance and precision at every stage of designing.
          </p>
        </div>
        <div className=" relative -z-30 aspect-square ml-4 motion-preset-slide-left-lg">
          <Image
            src={home2}
            fill
            className="object-contain"
            alt="Logo Of Homeland Ghana"
          />
        </div>
      </Grid>
      <Grid>
        <div id="home2" className="mt motion-preset-slide-right-lg">
          <h1 className="text-center text-4xl  mb-6">Property Supervision</h1>
          <p className="pl-5 text-xl tracking-widest motion-rotate-in-[0.5turn] ">
            At Nb Properties, supervision is not just oversight; it&apos;s a
            commitment to excellence, ensuring every detail is meticulously
            managed to transform visions into reality.We provide;
          </p>
        </div>
        <div className=" relative -z-30 aspect-square ml-4 motion-preset-slide-left-lg">
          <Image
            src={supervision}
            fill
            className="object-cover"
            alt="Logo Of Homeland Ghana"
          />
        </div>
      </Grid>
      <div className="w-full text-center bg-gray-900  text-white">
        <h1 className="text-center text-4xl font-bold mb-6">Our Services</h1>
        <p className="pl-5 pb-2 text-xl  tracking-widest animate-fadeIn ">
          1. Quality Assurance: Supervision helps ensure that the work meets the
          required standards and specifications, leading to higher quality
          <span className=" text-amber-300"> outcomes.</span>
        </p>
        <p className="pl-5 pb-2 text-xl animate-fadeIn ">
          2. Safety Management: A supervisor can enforce safety protocols
          on-site, reducing the risk of accidents and ensuring a safe working
          environment for all workers.
        </p>
        <p className="pl-5 pb-2 text-xl  tracking-widest animate-fadeIn ">
          3. Project Coordination: Supervisors facilitate communication between
          different teams, ensuring that everyone is aligned and that tasks are
          completed in a timely manner.
        </p>
        <p className="pl-5 text-xl pb-2  tracking-widest animate-fadeIn ">
          4. Problem Solving: With a supervisor on-site, issues can be
          identified and resolved quickly, minimizing delays and maintaining
          project momentum.
        </p>
        <p className="pl-5 text-xl pb-2  tracking-widest animate-fadeIn ">
          5. Resource Management: Effective supervision ensures that materials
          and resources are used efficiently, helping to stay within budget and
          reduce waste.
        </p>
        <p className="pl-5 text-xl pb-2 tracking-widest animate-fadeIn ">
          6. Compliance: Supervisors ensure that all work complies with local
          laws, regulations, and building codes, avoiding legal issues down the
          line.
        </p>
        <p className="pl-5 text-xl pb-2 tracking-widest animate-fadeIn ">
          7. Team Motivation: A good supervisor can inspire and motivate the
          team, fostering a positive work environment and enhancing
          productivity.
        </p>
      </div>
    </div>
  );
}
