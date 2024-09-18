import mobile from '../assets/mobile-img.png';
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';

function ApplicationDownload() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center bg-lightBrown">
        <div className="flex h-3/4 w-5/6 justify-around gap-10">
          <img src={mobile} alt="mobile" />
          <div className="flex w-1/2 flex-col justify-center gap-5">
            <h3 className="w-44 bg-red-600 px-2 py-1 text-center font-poppins font-medium capitalize text-white">
              Download the App
            </h3>
            <h1 className="px-2 font-poppins text-5xl font-bold capitalize leading-snug">
              Best App For Fast Food Delivery
            </h1>
            <div className="flex justify-start gap-4">
              <a
                href="#"
                className="text-dark flex w-56 items-center justify-start gap-2 rounded-full bg-yellow-500 px-5 py-4 text-center font-poppins font-normal capitalize hover:bg-yellow-400"
              >
                <FaApple className="text-5xl" />
                Download on the App Store
              </a>
              <a
                href="#"
                className="flex w-56 items-center justify-start gap-2 rounded-full bg-red-700 px-5 py-4 text-center font-poppins font-normal capitalize text-white hover:bg-red-600"
              >
                <FaGooglePlay className="text-5xl" />
                Andriod App on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDownload;
