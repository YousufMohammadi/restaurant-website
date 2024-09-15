import { GiChickenOven } from 'react-icons/gi';

function CategoryCard() {
  return (
    <div className="flex h-56 w-44 cursor-pointer flex-col items-center justify-center gap-7 rounded-2xl bg-gray-100 shadow-lg hover:bg-red-500">
      <GiChickenOven className="text-7xl text-orange-300" />
      <span className="font-poppins font-bold uppercase text-black">
        burger
      </span>
    </div>
  );
}

export default CategoryCard;
