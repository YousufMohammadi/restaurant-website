import Header from '../Components/Header';
import SliderComponent from '../Components/SliderComponent';
import Introduction from '../Components/Introduction';
import Category from '../Components/Category';
import TastyMenu from '../Components/TastyMenu';
import DailyDeal from '../Components/DailyDeal';
import Suggestion from '../Components/Suggestion';
import MenuComponent from '../Components/MenuComponent';
import ApplicationDownload from '../Components/ApplicationDownload';
import Blog from '../Components/Blog';
import Booking from '../Components/Booking';
import Footer from '../Components/Footer';

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
      <MenuComponent />
      <ApplicationDownload />
      <Blog />
      <Booking />
      <Footer />
    </main>
  );
}

export default Home;
