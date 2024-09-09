import logo from "../assets/logo.png";
import motor from "../assets/motor.png";
function Header() {
	return (
		<header className="flex justify-around items-center w-full h-20 ">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div className="flex justify-center gap-5">
				<a
					href="#"
					className="text-sm capitalize font-poppins font-medium text-gray-700 hover:text-red-400">
					home
				</a>
				<a
					href="#"
					className="text-sm capitalize font-poppins font-medium text-gray-700 hover:text-red-400">
					about
				</a>
				<a
					href="#"
					className="text-sm capitalize font-poppins font-medium text-gray-700 hover:text-red-400">
					menu
				</a>
				<a
					href="#"
					className="text-sm capitalize font-poppins font-medium text-gray-700 hover:text-red-400">
					products
				</a>
				<a
					href="#"
					className="text-sm capitalize font-poppins font-medium text-gray-700 hover:text-red-400">
					blog
				</a>
				<a
					href="#"
					className="text-sm capitalize font-poppins font-medium text-gray-700 hover:text-red-400">
					contact
				</a>
			</div>
			<div className="flex justify-between items-center gsp-5 w-48 bg-gray-700 rounded-full px-3 py-1">
				<img src={motor} alt="motor" />
				<div className="flex flex-col justify-between items-start">
					<span className="font-poppins">call</span>
					<span className="text-red-700 font-bold font-poppins">
						0123456789
					</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
