import Category from '../Components/Category';
import Cocumbar from '../Components/Cocumbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import offer from '../assets/welcome-burger-img.png';
import { HiMiniCheck } from 'react-icons/hi2';

function About() {
  return (
    <main className="h-auto w-full">
      <Header />
      <Cocumbar title="About" />
      <div className="mt-56 pb-10 pt-20">
        <Category />
      </div>
      <div className="mx-auto flex w-full items-center justify-around bg-lightBrown">
        <img src={offer} alt="offer" />
        <div className="flex w-1/2 flex-col justify-start gap-7">
          <h3 className="w-60 bg-red-600 px-5 py-2 text-center font-poppins font-medium text-white">
            Welcome to Fast Food
          </h3>
          <h1 className="w-4/5 font-poppins text-5xl font-bold">
            Real Delicious Food Straight To Your Door
          </h1>
          <p className="w-4/5 font-poppins text-base text-gray-700">
            Duis variurna id convallis elementu exerat tincidunt magna, sed
            pharetra est purus aceleo. Vivamus iny pellentesque arcu.
          </p>
          <div className="flex w-2/3 flex-wrap justify-start gap-5">
            <span className="flex items-center justify-start gap-2 font-poppins text-base">
              <HiMiniCheck className="text-red-600" />
              Premium Quality
            </span>
            <span className="flex items-center justify-start gap-2 font-poppins text-base">
              <HiMiniCheck className="text-red-600" />
              Variety of Dishes
            </span>
            <span className="flex items-center justify-start gap-2 font-poppins text-base">
              <HiMiniCheck className="text-red-600" />
              Always Fresh
            </span>
            <span className="flex items-center justify-start gap-2 font-poppins text-base">
              <HiMiniCheck className="text-red-600" />
              Fastest Delivery
            </span>
          </div>
          <a
            href="#"
            className="text-dark w-56 rounded-full bg-red-600 px-5 py-4 text-center font-poppins font-bold capitalize text-white hover:bg-red-400"
          >
            View All Menus
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default About;
