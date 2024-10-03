import Cocumbar from '../Components/Cocumbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import MenuComponent from '../Components/MenuComponent';

function Menu() {
  return (
    <main className="h-auto w-full">
      <Header />
      <Cocumbar title="Menu" />
      <MenuComponent />
      <Footer />
    </main>
  );
}

export default Menu;
