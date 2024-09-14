import Header from "../Components/Header";
import SliderComponent from "../Components/SliderComponent";
import Introduction from "../Components/Introduction";
import Category from "../Components/Category";

function Home() {
	return (
		<main className="w-full h-auto">
			<Header />
			<SliderComponent />
			<Introduction />
			<Category />
		</main>
	);
}

export default Home;
