import logo from '../assets/logo.png';
import motor from '../assets/motor.png';
function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-around bg-transparent">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-center gap-5">
        <a
          href="/home"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400"
        >
          home
        </a>
        <a
          href="/about"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400"
        >
          about
        </a>
        <a
          href="/menu"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400"
        >
          menu
        </a>
        <a
          href="/products"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400"
        >
          products
        </a>
        <a
          href="/blogs"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400"
        >
          blog
        </a>
        <a
          href="/contact"
          className="font-poppins text-sm font-medium capitalize text-black hover:text-red-400"
        >
          contact
        </a>
      </div>
      <div className="flex w-48 items-center justify-between rounded-full bg-red-700 px-5 py-1 text-white">
        <img src={motor} alt="motor" className="animate-bounce" />
        <div className="flex flex-col items-start justify-between">
          <span className="font-poppins">call</span>
          <span className="font-poppins font-bold text-white">0123456789</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
