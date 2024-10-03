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
      <Category />
      <div className="mx-auto flex w-full flex-col items-center justify-around bg-lightBrown py-2 md:flex-row">
        <div className="h-8/12 w-8/12 md:h-1/3 md:w-1/3">
          <img src={offer} alt="offer" className="h-full w-full" />
        </div>
        <div className="md:h-7/12 flex w-10/12 flex-col items-center justify-start gap-7 md:w-7/12 md:items-start">
          <h3 className="w-52 bg-red-600 px-4 py-1 text-center font-poppins text-sm font-normal capitalize text-white md:w-64 md:py-2 md:text-base md:font-medium">
            Welcome to Fast Food
          </h3>
          <h1 className="w-full text-center font-poppins text-xl font-bold capitalize md:w-4/5 md:text-start md:text-2xl lg:text-5xl">
            Real Delicious Food Straight To Your Door
          </h1>
          <p className="w-full text-center font-poppins text-sm text-gray-700 md:w-3/5 md:text-start md:text-base">
            Duis variurna id convallis elementu exerat tincidunt magna, sed
            pharetra est purus aceleo. Vivamus iny pellentesque arcu.
          </p>
          <div className="flex w-full flex-wrap justify-start gap-5">
            <span className="flex items-center justify-start gap-2 font-poppins text-sm md:text-base">
              <HiMiniCheck className="text-red-600" />
              Premium Quality
            </span>
            <span className="flex items-center justify-start gap-2 font-poppins text-sm md:text-base">
              <HiMiniCheck className="text-red-600" />
              Variety of Dishes
            </span>
            <span className="flex items-center justify-start gap-2 font-poppins text-sm md:text-base">
              <HiMiniCheck className="text-red-600" />
              Always Fresh
            </span>
            <span className="flex items-center justify-start gap-2 font-poppins text-sm md:text-base">
              <HiMiniCheck className="text-red-600" />
              Fastest Delivery
            </span>
          </div>
          <a
            href="#"
            className="w-36 rounded-full bg-red-700 px-3 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 lg:w-60 lg:px-5 lg:py-4 lg:text-xl lg:font-normal"
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
