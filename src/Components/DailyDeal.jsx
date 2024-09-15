import deal from '../assets/deal.png';
function DailyDeal() {
  return (
    <section className="flex h-screen w-full items-center justify-around bg-lightBrown">
      <div className="flex w-1/3 flex-col items-start justify-start gap-5">
        <h3 className="bg-red-600 px-5 py-2 text-center font-poppins font-medium text-white">
          Nature deal of the day
        </h3>
        <h1 className="w-4/5 font-poppins text-5xl font-bold">
          We Make the Best Burger in Town
        </h1>
        <p className="w-4/5 font-poppins text-base text-gray-700">
          Duis variurna id convallis elementu exerat tincidunt magna, sed
          pharetra est purusa celeo. Vivamus iny pellen.
        </p>
        <a
          href="#"
          className="my-16 w-44 rounded-full bg-red-700 px-5 py-4 text-center font-poppins font-normal capitalize text-white hover:bg-red-600"
        >
          discover more
        </a>
      </div>
      <div className="w-2/4">
        <img src={deal} alt="deal" />
      </div>
    </section>
  );
}

export default DailyDeal;
