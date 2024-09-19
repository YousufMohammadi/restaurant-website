import { MdLocationOn } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

function Booking() {
  return (
    <section className="flex w-full items-center justify-center bg-lightBrown py-10">
      {/* information */}
      <div className="flex w-2/5 flex-col justify-start gap-7">
        <div className="flex flex-col justify-start gap-3">
          <h3 className="w-28 bg-red-600 px-4 py-1 font-poppins font-medium capitalize text-white">
            Reach Us
          </h3>
          <h1 className="w-4/5 px-2 font-poppins text-4xl font-bold capitalize leading-snug">
            Have Questions? Reach Out To Us
          </h1>
        </div>
        <div className="flex flex-col justify-start gap-14">
          <div className="flex items-center justify-start gap-10">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white px-2 py-2">
              <MdLocationOn className="text-3xl text-red-700" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h3 className="mb-3 font-poppins text-xl font-bold">Address</h3>
              <span className="font-poppins text-sm text-gray-800">
                Street 057 Phase malesua
              </span>
              <span className="font-poppins text-sm text-gray-800">
                imusex, efficitur
              </span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-10">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white px-2 py-2">
              <FaPhoneVolume className="text-3xl text-red-700" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h3 className="mb-3 font-poppins text-xl font-bold">Our Phone</h3>
              <span className="font-poppins text-sm text-gray-800">
                phone : 00254698720
              </span>
              <span className="font-poppins text-sm text-gray-800">
                Mobile : 123 456 7890
              </span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-10">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white px-2 py-2">
              <MdOutlineMail className="text-3xl text-red-700" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h3 className="mb-3 font-poppins text-xl font-bold">Our Email</h3>
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
      <div className="flex h-screen w-2/5 flex-col items-center justify-start gap-5 rounded-lg bg-white">
        <h1 className="mb-5 pt-7 font-poppins text-4xl font-bold capitalize leading-snug">
          Book Your Table
        </h1>
        <input
          type="text"
          placeholder="Name"
          className="w-96 border px-3 py-3"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-96 border px-3 py-3"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-96 border px-3 py-3"
        />
        <input
          type="text"
          placeholder="Many Person"
          className="w-96 border px-3 py-3"
        />
        <input
          type="text"
          placeholder="Time"
          className="w-96 border px-3 py-3"
        />
        <input
          type="date"
          placeholder="Date"
          className="w-96 border px-3 py-3"
        />
        <a
          href="#"
          className="text-dark w-56 rounded-full bg-red-500 px-5 py-4 text-center font-poppins font-bold capitalize text-white hover:bg-red-400"
        >
          book a table
        </a>
      </div>
    </section>
  );
}

export default Booking;
