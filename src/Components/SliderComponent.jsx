import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from "../assets/introduction1.jpg";
import slide2 from "../assets/introduction2.jpg";
import slide3 from "../assets/introduction3.jpg";

export default function SliderComponent() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		className: "slide",
	};
	return (
		<div className="slider">
			<Slider {...settings}>
				<img src={slide1} alt="slide" className="w-full h-screen" />
				<img src={slide2} alt="slide" className="w-full h-screen" />
				<img src={slide3} alt="slide" className="w-full h-screen" />
			</Slider>
		</div>
	);
}
