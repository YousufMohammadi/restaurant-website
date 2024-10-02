import deal from '../assets/deal.png';
function DailyDeal() {
  return (
    <section className="flex h-fit w-full flex-col-reverse items-center justify-around gap-20 bg-lightBrown py-5 md:h-screen md:flex-row md:px-10">
      <div className="flex w-full flex-col items-center justify-start gap-5 md:w-4/6 md:items-start lg:w-5/6">
        <h3 className="bg-red-600 px-4 py-1 text-center font-poppins text-sm font-normal capitalize text-white md:py-2 md:text-base md:font-medium">
          Nature deal of the day
        </h3>
        <h1 className="w-full px-3 text-center font-poppins text-xl font-bold capitalize md:w-full md:items-start md:text-start md:text-2xl lg:text-5xl">
          We Make the Best Burger in Town
        </h1>
        <p className="w-full px-5 text-center font-poppins text-sm text-gray-700 md:w-full md:text-start md:text-base">
          Duis variurna id convallis elementu exerat tincidunt magna, sed
          pharetra est purusa celeo. Vivamus iny pellen.
        </p>
        <a
          href="#"
          className="w-36 rounded-full bg-red-700 px-3 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 lg:w-60 lg:px-5 lg:py-4 lg:text-xl lg:font-normal"
        >
          discover more
        </a>
      </div>
      <div className="w-full">
        <img src={deal} alt="deal" className="mx-auto" />
      </div>
    </section>
  );
}

export default DailyDeal;
