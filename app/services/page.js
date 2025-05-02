import Grid from "../components/Grid";

import mosbi from "../../public/mosbi.webp";

import home3 from "../../public/mason.jpg";
import supervision from "../../public/supervision.webp";

import Image from "next/image";
import SupervisionPara from "../components/SupervisionPara";
import { GiCheckMark } from "react-icons/gi";
import SupervisionSpan from "../components/SupervisionSpan";

export default function Page() {
  return (
    <div>
      <Grid>
        <div id="home1" className="mt-2 motion-preset-slide-right-lg ">
          <h1 className="text-center text-3xl md:text-4xl animate-pulse mb-6">
            Building Procurement
          </h1>
          <p className="pl-5 text-lg">
            Effective building procurement is the foundation of successful
            construction; it ensures quality materials, timely delivery, and
            cost efficiency, paving the way for a project&apos;s success. When
            it comes to building projects, Nb properties has specialists on
            hotline to give you the value for money, provide quality sourcing
            services.
          </p>
        </div>
        <div className=" relative -z-30 aspect-square ml-4 motion-preset-slide-left-lg">
          <Image
            src={home3}
            fill
            className="object-contain"
            alt="Image of a mason"
          />
        </div>
      </Grid>
      <Grid>
        <div id="home3" className="mt motion-preset-slide-right-lg">
          <h1 className="text-center text-3xl  md:text-4xl  mb-6">
            Architecture
          </h1>
          <p className="pl-5 text-lg ">
            Architecture is the art of creating spaces that inspire, first stage
            to bring dreams into reality while supervision ensures quality
            assurance and precision at every stage of designing.At Nb
            Properties, we believe that architecture is more than just bricks
            and mortar. It&apos;s about crafting spaces that inspire, connect,
            and elevate the human experience. Our team of architects and
            designers are passionate about creating innovative and sustainable
            structures that reflect our clients &apos; unique vision.
          </p>
        </div>
        <div className=" relative -z-30 aspect-square ml-4 motion-preset-slide-left-lg">
          <Image
            src={mosbi}
            fill
            className="object-contain"
            alt="Image of architects"
          />
        </div>
      </Grid>
      <Grid>
        <div id="home2" className="mt motion-preset-slide-right-lg">
          <h1 className="text-center text-3xl  md:text-4xl animate-pulse mb-6">
            Property Supervision
          </h1>

          <p className="pl-5 text-lg  mb-2 ">
            At Nb Properties, supervision is not just oversight; it&apos;s a
            commitment to excellence, ensuring every detail is meticulously
            managed to transform visions into reality.We provide;
          </p>
          <SupervisionPara>
            <SupervisionSpan>Quality Assurance</SupervisionSpan>
            Supervision helps ensure that the work meets the required standards
            and specifications, leading to higher quality.
          </SupervisionPara>
          <SupervisionPara>
            <SupervisionSpan>Safety Management</SupervisionSpan>A supervisor can
            enforce safety protocols on-site, reducing the risk of accidents and
            ensuring a safe working environment for all workers.
          </SupervisionPara>
          <SupervisionPara>
            <SupervisionSpan>Project Coordination</SupervisionSpan>
            Supervisors facilitate communication between different teams,
            ensuring that everyone is aligned and that tasks are completed in a
            timely manner.
          </SupervisionPara>
          <SupervisionPara>
            <SupervisionSpan> Problem Solving</SupervisionSpan>
            With a supervisor on-site, issues can be identified and resolved
            quickly, minimizing delays and maintaining project momentum.
          </SupervisionPara>
          <SupervisionPara>
            <SupervisionSpan> Resource Management</SupervisionSpan>
            Effective supervision ensures that materials and resources are used
            efficiently, helping to stay within budget and reduce waste.
          </SupervisionPara>
          <SupervisionPara>
            <SupervisionSpan>Compliance</SupervisionSpan>
            Supervisors ensure that all work complies with local laws,
            regulations, and building codes, avoiding legal issues down the
            line.
          </SupervisionPara>
          <SupervisionPara>
            <SupervisionSpan> Team Motivation</SupervisionSpan>A good supervisor
            can inspire and motivate the team, fostering a positive work
            environment and enhancing productivity.
          </SupervisionPara>
        </div>
        <div className=" relative -z-30 aspect-square motion-preset-slide-left-lg">
          <Image
            src={supervision}
            fill
            className="object-contain"
            alt="A group of labourers"
          />
        </div>
      </Grid>
    </div>
  );
}
