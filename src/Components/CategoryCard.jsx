import { GiChickenOven } from "react-icons/gi";

function CategoryCard() {
	return (
		<div className="w-44 h-56 bg-red-600 rounded-2xl flex flex-col justify-center items-center gap-7 cursor-pointer hover:bg-red-500">
			<GiChickenOven className="text-orange-300 text-7xl" />
			<span className="text-white font-poppins font-bold uppercase">
				burger
			</span>
		</div>
	);
}

export default CategoryCard;
