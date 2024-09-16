import food1 from '../assets/pizza.png';
function MenuCard() {
  return (
    <div className="relative flex h-full w-2/5 flex-col justify-start gap-10 rounded-xl bg-gray-100 px-2 py-2 pt-14">
      <a
        href="#"
        className="absolute -top-7 left-1/3 w-44 rounded-full bg-red-700 px-5 py-4 text-center font-poppins font-normal capitalize text-white hover:bg-red-600"
      >
        fast food
      </a>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-between">
            <h2 className="font-poppins text-xl font-bold text-gray-900">
              Grilled Burger
            </h2>
            <p className="font-poppins text-base font-normal text-gray-800">
              Praese feugiat placer levolut
            </p>
          </div>
        </div>
        <span className="font-poppins text-xl font-semibold text-gray-900">
          $13.50
        </span>
      </div>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-between">
            <h2 className="font-poppins text-xl font-bold text-gray-900">
              Grilled Burger
            </h2>
            <p className="font-poppins text-base font-normal text-gray-800">
              Praese feugiat placer levolut
            </p>
          </div>
        </div>
        <span className="font-poppins text-xl font-semibold text-gray-900">
          $13.50
        </span>
      </div>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-between">
            <h2 className="font-poppins text-xl font-bold text-gray-900">
              Grilled Burger
            </h2>
            <p className="font-poppins text-base font-normal text-gray-800">
              Praese feugiat placer levolut
            </p>
          </div>
        </div>
        <span className="font-poppins text-xl font-semibold text-gray-900">
          $13.50
        </span>
      </div>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-between">
            <h2 className="font-poppins text-xl font-bold text-gray-900">
              Grilled Burger
            </h2>
            <p className="font-poppins text-base font-normal text-gray-800">
              Praese feugiat placer levolut
            </p>
          </div>
        </div>
        <span className="font-poppins text-xl font-semibold text-gray-900">
          $13.50
        </span>
      </div>
      {/* row */}
      <div className="flex items-center justify-between px-5">
        <div className="flex justify-start gap-2">
          <img src={food1} alt="food" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col justify-between">
            <h2 className="font-poppins text-xl font-bold text-gray-900">
              Grilled Burger
            </h2>
            <p className="font-poppins text-base font-normal text-gray-800">
              Praese feugiat placer levolut
            </p>
          </div>
        </div>
        <span className="font-poppins text-xl font-semibold text-gray-900">
          $13.50
        </span>
      </div>
    </div>
  );
}

export default MenuCard;
