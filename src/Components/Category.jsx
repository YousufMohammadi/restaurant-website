import CategoryCard from './CategoryCard';
import { GiChickenOven } from 'react-icons/gi';
import { GiFullPizza } from 'react-icons/gi';
import { PiHamburgerFill } from 'react-icons/pi';
import { RiDrinks2Fill } from 'react-icons/ri';
import { GiMeat } from 'react-icons/gi';
import { GiFruitBowl } from 'react-icons/gi';

function Category() {
  return (
    <section className="flex flex-col items-center justify-start gap-5 py-10">
      <h3 className="bg-red-600 px-4 py-1 text-center font-poppins text-sm font-normal capitalize text-white md:py-2 md:text-base md:font-medium">
        chose & enjoy
      </h3>
      <h1 className="w-full px-3 text-center font-poppins text-xl font-bold capitalize md:w-3/5 md:text-2xl lg:text-5xl">
        What Do You Want To Eat Today?
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-7 px-5 py-5">
        <CategoryCard
          title="buger"
          icon={<PiHamburgerFill className="text-7xl text-orange-300" />}
        />
        <CategoryCard
          title="pizza"
          icon={<GiFullPizza className="text-7xl text-orange-300" />}
        />
        <CategoryCard
          title="chicken"
          icon={<GiChickenOven className="text-7xl text-orange-300" />}
        />
        <CategoryCard
          title="juice"
          icon={<RiDrinks2Fill className="text-7xl text-orange-300" />}
        />
        <CategoryCard
          title="meat"
          icon={<GiMeat className="text-7xl text-orange-300" />}
        />
        <CategoryCard
          title="fruit"
          icon={<GiFruitBowl className="text-7xl text-orange-300" />}
        />
      </div>
    </section>
  );
}

export default Category;
