import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaSnapchat,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
  CiMail,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-xl font-bold">NB PROPERTIES</h2>
          <p className=" mt-2 text-yellow-400">The NEXTGEN BUILDERS.</p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-400 hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>

            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        {/* <div>
          <h3 className="text-lg font-semibold">Our Services</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                SEO Optimization
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                E-commerce
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Column 4 - Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2">Email: @nbpropertiesgh@gmail.com</p>
          <p className="text-gray-400">Phone: +233545124145 / +233245726248</p>
        </div>
      </div>

      <div className=" flex justify-center mt-8">
        <div className="flex ">
          <Link
            className="px-2"
            href="https://www.instagram.com/emvelnatural?igsh=MWg2YmY1em54bGt4bQ=="
            target="_blank"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            className="px-2"
            href="https://www.facebook.com/share/1Hcr3mgbFq"
            target="_blank"
          >
            <FaFacebook size={30} spacing={40} />
          </Link>
          {/* <Link className="px-2" href="">
            <FaTwitter size={30} spacing={40} />
          </Link> */}
          {/* <Link href="mail:ciici6440@gmail.com">
            <CiMail size={30} spacing={40} />
          </Link> */}
          <Link className="px-2" href="/">
            <FaWhatsapp size={30} spacing={40} />
          </Link>
          <Link
            className="px-2"
            href="https://www.tiktok.com/@emvel_royal?_t=ZS-8ukqTVyQySA&_r=1"
            target="_blank"
          >
            <FaTiktok size={30} spacing={40} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-2 text-sm">
        &copy; {new Date().getFullYear()} NB Properties. All rights reserved.
      </div>
    </footer>
  );
}
