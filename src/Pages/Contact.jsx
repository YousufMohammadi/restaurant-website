import Cocumbar from '../Components/Cocumbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Map from '../Components/Map';

function Contact() {
  return (
    <main className="h-auto w-full">
      <Header />
      <Cocumbar title="Contact" />
      <div className="mx-auto flex w-10/12 flex-col items-center justify-start gap-5 py-5">
        <div className="z-10 w-full">
          <Map />
        </div>
        <div className="flex w-full flex-col justify-between pt-7 md:flex-row">
          <div className="flex w-full flex-col items-center justify-start gap-5 md:w-3/5 md:items-start">
            <h1 className="mb-5 font-poppins text-xl font-medium capitalize leading-snug md:text-2xl md:font-bold lg:text-4xl">
              Message For Us
            </h1>
            <input
              type="text"
              placeholder="Your Name"
              className="w-10/12 border px-3 py-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-10/12 border px-3 py-3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-10/12 border px-3 py-3"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-10/12 border px-3 py-3"
            ></textarea>
            <a
              href="#"
              className="w-36 rounded-full bg-red-700 px-3 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 lg:w-60 lg:px-5 lg:py-4 lg:text-xl lg:font-normal"
            >
              SUBMIT
            </a>
          </div>
          <div className="flex flex-col items-center justify-start gap-3 pt-5 md:items-start md:pt-0">
            <h2 className="font-poppins text-2xl font-bold capitalize text-slate-900">
              Contact Info
            </h2>
            <p className="text-center font-poppins text-base text-slate-800 md:text-start">
              Donec ultricies mattis nulla Australia
            </p>
            <p className="font-poppins text-base text-slate-800">
              0789 256 321
            </p>
            <a
              href="#"
              className="font-poppins text-base text-red-600 hover:text-slate-900"
            >
              info@companyname.com
            </a>
            <a
              href="#"
              className="font-poppins text-base text-red-600 hover:text-slate-900"
            >
              http://demo.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Contact;
