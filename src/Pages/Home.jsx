import Header from '../Components/Header';
import SliderComponent from '../Components/SliderComponent';
import Introduction from '../Components/Introduction';
import Category from '../Components/Category';
import TastyMenu from '../Components/TastyMenu';
import DailyDeal from '../Components/DailyDeal';

function Home() {
  return (
    <main className="h-auto w-full">
      <Header />
      <SliderComponent />
      <Introduction />
      <Category />
      <TastyMenu />
      <DailyDeal />
    </main>
  );
}

export default Home;
