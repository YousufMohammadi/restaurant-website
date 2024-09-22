import logo from '../assets/logoFooter.png';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="flex h-screen w-full flex-wrap bg-black px-24 py-12">
      <div className="flex w-full items-center justify-between border-b border-b-gray-900">
        <img src={logo} alt="logo" />
        <div className="flex w-1/4 justify-center gap-2">
          <a
            href="#"
            className="rounded-full bg-gray-950 px-5 py-5 text-center text-lg text-white hover:bg-gray-900"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-950 px-5 py-5 text-center text-lg text-white hover:bg-gray-900"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-950 px-5 py-5 text-center text-lg text-white hover:bg-gray-900"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-950 px-5 py-5 text-center text-lg text-white hover:bg-gray-900"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-950 px-5 py-5 text-center text-lg text-white hover:bg-gray-900"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-start border-b border-b-gray-900 py-5">
        <div className="flex w-1/4 flex-col justify-start gap-7">
          <h2 className="font-poppins text-2xl font-bold text-white">
            About us
          </h2>
          <p className="w-11/12 text-justify font-poppins text-base leading-normal text-white">
            Suspendisse interdum, nisi nec effiitur auctor, odio lcongue ligula,
            se sodales tortor turpis at elit. Aliquam iacipsum ut odio variusid
            interdum lac dictum. Mauris a maximusey dolovestibulum. Morbi non
            vestibulum
          </p>
        </div>
        <div className="flex w-1/4 flex-col justify-start gap-7 pl-7">
          <h2 className="font-poppins text-2xl font-bold text-white">
            Our Menu
          </h2>
          <div className="flex flex-col justify-start gap-2">
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Beef Burgers
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Chicken Burgers
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Vegan Options
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Nuggets
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> French Fries
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Desserts
            </a>
          </div>
        </div>
        <div className="flex w-1/4 flex-col justify-start gap-7 pl-5">
          <h2 className="font-poppins text-2xl font-bold text-white">
            Quick Links
          </h2>
          <div className="flex flex-col justify-start gap-2">
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Home
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> About
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Menu
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Products
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Blog
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-start gap-2 font-poppins text-base text-white hover:text-gray-200"
            >
              <FaChevronRight /> Contact
            </a>
          </div>
        </div>
        <div className="flex w-1/4 flex-col justify-start gap-5">
          <h2 className="font-poppins text-2xl font-bold text-white">
            Contact Info
          </h2>
          <p className="w-9/12 text-justify font-poppins text-base leading-normal text-white">
            Street 238,52 tempor Donec ultricies mattis nulla risus tristique
            ut.
          </p>
          <span className="font-poppins text-base text-white">
            Phone: +01 23 456 7890
          </span>
          <span className="font-poppins text-base text-white">
            E-mail: support@sitename.com
          </span>
          <span className="font-poppins text-base text-white">
            Website: https://sktthemes.org
          </span>
        </div>
      </div>
      <div className="mt-auto flex w-full items-center justify-between px-2">
        <span className="font-poppins text-base text-white">
          © Copyright 2022 SKT GB Sandwich. All Rights Reserved
        </span>
        <span className="font-poppins text-base text-white">
          Design by SKT Themes
        </span>
      </div>
    </footer>
  );
}

export default Footer;
