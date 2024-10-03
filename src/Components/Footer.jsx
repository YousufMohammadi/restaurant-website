import logo from '../assets/logoFooter.png';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="flex w-full flex-wrap bg-black py-12 lg:px-24">
      <div className="flex w-full flex-col items-center justify-between gap-5 border-b border-b-gray-900 py-2 md:mx-auto md:w-10/12 md:flex-row lg:w-full">
        <img src={logo} alt="logo" />
        <div className="flex justify-center gap-2">
          <a
            href="#"
            className="rounded-full bg-gray-950 px-3 py-3 text-center text-base text-white hover:bg-gray-900 md:px-5 md:py-5 md:text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-950 px-3 py-3 text-center text-base text-white hover:bg-gray-900 md:px-5 md:py-5 md:text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-950 px-3 py-3 text-center text-base text-white hover:bg-gray-900 md:px-5 md:py-5 md:text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-950 px-3 py-3 text-center text-base text-white hover:bg-gray-900 md:px-5 md:py-5 md:text-lg"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-950 px-3 py-3 text-center text-base text-white hover:bg-gray-900 md:px-5 md:py-5 md:text-lg"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-5 border-b border-b-gray-900 py-5 md:flex-row md:flex-wrap md:items-start md:justify-center lg:flex-nowrap">
        <div className="flex w-10/12 flex-col justify-start gap-7 md:w-5/12 lg:w-1/4">
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
        <div className="flex w-10/12 flex-col justify-start gap-7 md:w-5/12 lg:w-1/4 lg:pl-7">
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
        <div className="flex w-10/12 flex-col justify-start gap-7 md:w-5/12 lg:w-1/4 lg:pl-5">
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
        <div className="flex w-10/12 flex-col justify-start gap-5 md:w-5/12 lg:w-1/4">
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
      <div className="mx-auto flex w-10/12 flex-col items-center justify-between gap-3 px-2 pt-3 md:flex-row lg:w-full">
        <span className="text-center font-poppins text-base text-white">
          © Copyright 2024 By Yousuf Mohammadi. All Rights Reserved
        </span>
        <span className="font-poppins text-base text-white">
          Design by Yousuf Mohammadi
        </span>
      </div>
    </footer>
  );
}

export default Footer;
