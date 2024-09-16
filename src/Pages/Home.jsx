import Header from '../Components/Header';
import SliderComponent from '../Components/SliderComponent';
import Introduction from '../Components/Introduction';
import Category from '../Components/Category';
import TastyMenu from '../Components/TastyMenu';
import DailyDeal from '../Components/DailyDeal';
import Suggestion from '../Components/Suggestion';
import Menu from '../Components/Menu';

function Home() {
  return (
    <main className="h-auto w-full">
      <Header />
      <SliderComponent />
      <Introduction />
      <Category />
      <TastyMenu />
      <DailyDeal />
      <Suggestion />
      <Menu />
    </main>
  );
}

export default Home;
