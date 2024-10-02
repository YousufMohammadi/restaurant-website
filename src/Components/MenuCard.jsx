import food1 from '../assets/pizza.png';
function MenuCard() {
  return (
    <div className="relative flex h-fit w-80 flex-col justify-start gap-10 rounded-xl bg-gray-100 px-2 py-2 pt-14 md:w-9/12">
      <a
        href="#"
        className="absolute -top-5 left-[30%] rounded-full bg-red-700 px-10 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 md:left-[40%] md:py-4 md:font-normal lg:left-[30%]"
      >
        fast food
      </a>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-around">
            <h2 className="font-poppins text-base font-medium text-gray-900 md:text-xl md:font-bold">
              Grilled Burger
            </h2>
            <p className="font-poppins text-sm font-normal text-gray-800 md:text-base">
              Praese feugiat placer
            </p>
          </div>
        </div>
        <span className="font-poppins text-base font-semibold text-gray-900 md:text-xl">
          $13.50
        </span>
      </div>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-around">
            <h2 className="font-poppins text-base font-medium text-gray-900 md:text-xl md:font-bold">
              Grilled Burger
            </h2>
            <p className="font-poppins text-sm font-normal text-gray-800 md:text-base">
              Praese feugiat placer
            </p>
          </div>
        </div>
        <span className="font-poppins text-base font-semibold text-gray-900 md:text-xl">
          $13.50
        </span>
      </div>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-around">
            <h2 className="font-poppins text-base font-medium text-gray-900 md:text-xl md:font-bold">
              Grilled Burger
            </h2>
            <p className="font-poppins text-sm font-normal text-gray-800 md:text-base">
              Praese feugiat placer
            </p>
          </div>
        </div>
        <span className="font-poppins text-base font-semibold text-gray-900 md:text-xl">
          $13.50
        </span>
      </div>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-around">
            <h2 className="font-poppins text-base font-medium text-gray-900 md:text-xl md:font-bold">
              Grilled Burger
            </h2>
            <p className="font-poppins text-sm font-normal text-gray-800 md:text-base">
              Praese feugiat placer
            </p>
          </div>
        </div>
        <span className="font-poppins text-base font-semibold text-gray-900 md:text-xl">
          $13.50
        </span>
      </div>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-around">
            <h2 className="font-poppins text-base font-medium text-gray-900 md:text-xl md:font-bold">
              Grilled Burger
            </h2>
            <p className="font-poppins text-sm font-normal text-gray-800 md:text-base">
              Praese feugiat placer
            </p>
          </div>
        </div>
        <span className="font-poppins text-base font-semibold text-gray-900 md:text-xl">
          $13.50
        </span>
      </div>
    </div>
  );
}

export default MenuCard;
