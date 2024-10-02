import mobile from '../assets/mobile-img.png';
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';

function ApplicationDownload() {
  return (
    <section className="mt-5 flex h-fit w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center bg-lightBrown py-5">
        <div className="flex h-3/4 w-5/6 flex-col justify-around gap-10 md:w-10/12 md:flex-row md:justify-between">
          <img src={mobile} alt="mobile" />
          <div className="flex flex-col items-center justify-center gap-5 md:w-1/2 md:items-start">
            <h3 className="w-44 bg-red-600 px-2 py-1 text-center font-poppins font-medium capitalize text-white">
              Download the App
            </h3>
            <h1 className="mb-5 text-center font-poppins text-xl font-medium capitalize leading-snug md:text-start lg:w-11/12 lg:text-5xl xl:w-2/3">
              Best App For Fast Food Delivery
            </h1>
            <div className="flex flex-col justify-start gap-4 lg:flex-row">
              <a
                href="#"
                className="flex w-64 items-center justify-start gap-2 rounded-full bg-red-700 px-5 py-2 text-center font-poppins font-normal capitalize text-white hover:bg-red-600 md:w-56 md:py-4"
              >
                <FaGooglePlay className="text-5xl" />
                Andriod App on Google Play
              </a>
              <a
                href="#"
                className="text-dark flex w-64 items-center justify-start gap-2 rounded-full bg-yellow-500 px-5 py-2 text-center font-poppins font-normal capitalize hover:bg-yellow-400 md:w-56 md:py-4"
              >
                <FaApple className="text-5xl" />
                Download on the App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationDownload;
