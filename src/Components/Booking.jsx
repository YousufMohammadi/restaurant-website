import { MdLocationOn } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

function Booking() {
  return (
    <section className="flex w-full flex-col items-center justify-between gap-20 bg-lightBrown py-10 md:justify-center lg:flex-row lg:gap-5">
      {/* information */}
      <div className="flex w-full flex-col justify-start gap-7 md:w-3/5 lg:w-2/5">
        <div className="flex flex-col items-center justify-start gap-3 lg:items-start">
          <h3 className="w-44 bg-red-600 px-4 py-1 text-center font-poppins text-sm font-normal capitalize text-white md:py-2 md:text-base md:font-medium">
            Reach Us
          </h3>
          <h1 className="w-full px-3 text-center font-poppins text-xl font-bold capitalize md:w-3/5 md:text-2xl lg:w-full lg:text-start lg:text-5xl">
            Have Questions? Reach Out To Us
          </h1>
        </div>
        <div className="mx-auto flex w-72 flex-col justify-start gap-14 md:w-8/12 lg:w-full lg:items-start">
          <div className="flex items-center justify-start gap-5 md:gap-10">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-white px-2 py-2 md:h-20 md:w-20">
              <MdLocationOn className="text-3xl text-red-700" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h3 className="mb-1 font-poppins text-lg font-bold md:mb-3 md:text-xl">
                Address
              </h3>
              <span className="font-poppins text-sm text-gray-800">
                Street 057 Phase malesua
              </span>
              <span className="font-poppins text-sm text-gray-800">
                imusex, efficitur
              </span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5 md:gap-10">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-white px-2 py-2 md:h-20 md:w-20">
              <FaPhoneVolume className="text-3xl text-red-700" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h3 className="mb-1 font-poppins text-lg font-bold md:mb-3 md:text-xl">
                Our Phone
              </h3>
              <span className="font-poppins text-sm text-gray-800">
                phone : 00254698720
              </span>
              <span className="font-poppins text-sm text-gray-800">
                Mobile : 123 456 7890
              </span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5 md:gap-10">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-white px-2 py-2 md:h-20 md:w-20">
              <MdOutlineMail className="text-3xl text-red-700" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h3 className="mb-1 font-poppins text-lg font-bold md:mb-3 md:text-xl">
                Our Email
              </h3>
              <span className="font-poppins text-sm text-gray-800">
                info@sitename.com
              </span>
              <span className="font-poppins text-sm text-gray-800">
                support@sitename.com
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* booking */}
      <div className="flex h-screen w-10/12 flex-col items-center justify-start gap-5 rounded-lg bg-white lg:w-2/5">
        <h1 className="mb-5 pt-7 font-poppins text-xl font-medium capitalize leading-snug md:text-2xl md:font-bold lg:text-4xl">
          Book Your Table
        </h1>
        <input
          type="text"
          placeholder="Name"
          className="w-10/12 border px-3 py-3"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-10/12 border px-3 py-3"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-10/12 border px-3 py-3"
        />
        <input
          type="text"
          placeholder="Many Person"
          className="w-10/12 border px-3 py-3"
        />
        <input
          type="text"
          placeholder="Time"
          className="w-10/12 border px-3 py-3"
        />
        <input
          type="date"
          placeholder="Date"
          className="w-10/12 border px-3 py-3"
        />
        <a
          href="#"
          className="w-36 rounded-full bg-red-700 px-3 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 lg:w-60 lg:px-5 lg:py-4 lg:text-xl lg:font-normal"
        >
          book a table
        </a>
      </div>
    </section>
  );
}

export default Booking;
