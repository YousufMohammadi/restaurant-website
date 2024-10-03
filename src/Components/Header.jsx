import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import motor from '../assets/motor.png';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
  // navigation or burger Menu
  const navigate = useNavigate();
  function handleMenu() {
    var x = document.getElementById('header');
    if (x.style.display === 'flex') {
      x.style.display = 'none';
    } else {
      x.style.display = 'flex';
    }
  }
  return (
    <header className="fixed left-0 top-0 z-30 flex w-full items-center justify-between bg-white px-5 py-2 md:absolute md:justify-around md:bg-white/10">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="justify-center gap-5 max-lg:flex max-sm:hidden sm:hidden md:flex">
        <a
          onClick={() => navigate('/home')}
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          home
        </a>
        <a
          onClick={() => navigate('/about')}
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          about
        </a>
        <a
          onClick={() => navigate('/menu')}
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          menu
        </a>
        <a
          onClick={() => navigate('/products')}
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          products
        </a>
        <a
          onClick={() => navigate('/blogs')}
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          blog
        </a>
        <a
          onClick={() => navigate('/contact')}
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          contact
        </a>
      </div>
      <div className="w-48 items-center justify-between rounded-full bg-white px-5 py-1 text-slate-900 max-sm:hidden sm:hidden md:flex">
        <img src={motor} alt="motor" className="animate-bounce" />
        <div className="flex flex-col items-start justify-between">
          <span className="font-poppins">call</span>
          <span className="font-poppins font-bold text-red-700">
            0123456789
          </span>
        </div>
      </div>
      {/* burger menu */}
      <RxHamburgerMenu
        className="cursor-pointer text-2xl md:hidden"
        onClick={handleMenu}
      />
      {/* mobile menu links */}
      <div
        className="fixed left-0 top-16 z-30 min-h-[calc(100vh_-_65px)] w-full flex-col items-center justify-start gap-5 bg-white py-5 max-sm:hidden sm:hidden md:hidden"
        id="header"
      >
        <a
          href="/home"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          home
        </a>
        <a
          href="/about"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          about
        </a>
        <a
          href="/menu"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          menu
        </a>
        <a
          href="/products"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          products
        </a>
        <a
          href="/blogs"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          blog
        </a>
        <a
          href="/contact"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400 lg:text-base"
        >
          contact
        </a>
        <div className="w-48 items-center justify-between rounded-full bg-black/50 px-5 py-1 text-slate-100 max-sm:flex sm:flex md:hidden">
          <img src={motor} alt="motor" className="animate-bounce" />
          <div className="flex flex-col items-start justify-between">
            <span className="font-poppins">call</span>
            <span className="font-poppins font-bold text-red-700">
              0123456789
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
