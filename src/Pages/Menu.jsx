import Cocumbar from '../Components/Cocumbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import MenuComponent from '../Components/MenuComponent';

function Menu() {
  return (
    <main className="h-auto w-full">
      <Header />
      <Cocumbar title="Menu" />
      <div className="mt-56 pb-10 pt-20">
        <MenuComponent />
      </div>
      <Footer />
    </main>
  );
}

export default Menu;
