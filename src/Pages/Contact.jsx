import Cocumbar from '../Components/Cocumbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Map from '../Components/Map';

function Contact() {
  return (
    <main className="h-auto w-full">
      <Header />
      <Cocumbar title="Contact" />
      <div className="mx-auto mt-56 flex w-10/12 flex-col items-center justify-start gap-5 pb-10 pt-20">
        <Map />
        <div className="flex w-full justify-between pt-7">
          <div className="flex w-3/5 flex-col items-start justify-start gap-5 rounded-lg bg-white">
            <h1 className="font-poppins text-4xl font-bold capitalize leading-snug">
              Book Your Table
            </h1>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-3 py-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-3 py-3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border px-3 py-3"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-full border px-3 py-3"
            ></textarea>
            <a
              href="#"
              className="text-dark w-56 rounded-full bg-red-700 px-5 py-4 text-center font-poppins font-medium capitalize text-white hover:bg-red-400"
            >
              SUBMIT
            </a>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="font-poppins text-2xl font-bold capitalize text-slate-900">
              Contact Info
            </h2>
            <p className="font-poppins text-base text-slate-800">
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
