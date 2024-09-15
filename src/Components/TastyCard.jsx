import pizza from '../assets/pizza.png';
import { FaStar } from 'react-icons/fa6';

function TastyCard() {
  return (
    <div className="flex h-96 w-80 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl bg-gray-100">
      <img src={pizza} alt="pizza" className="h-64 w-64" />
      <h3 className="font-poppins text-xl font-bold uppercase text-black">
        double cheese pizza
      </h3>
      <div className="flex items-center justify-center gap-2">
        <FaStar className="text-sm text-orange-500 hover:text-orange-400" />
        <FaStar className="text-sm text-orange-500 hover:text-orange-400" />
        <FaStar className="text-sm text-orange-500 hover:text-orange-400" />
        <FaStar className="text-sm text-orange-500 hover:text-orange-400" />
        <FaStar className="text-sm text-orange-500 hover:text-orange-400" />
      </div>
      <span className="font-poppins font-bold uppercase text-gray-700">
        price - $199.00
      </span>
    </div>
  );
}

export default TastyCard;
