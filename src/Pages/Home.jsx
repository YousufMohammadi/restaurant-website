import Header from "../Components/Header";
import SliderComponent from "../Components/SliderComponent";
import Introduction from "../Components/Introduction";

function Home() {
	return (
		<main className="w-full h-auto">
			<Header />
			<SliderComponent />
			<Introduction />
		</main>
	);
}

export default Home;
