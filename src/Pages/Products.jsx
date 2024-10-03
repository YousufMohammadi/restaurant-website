import Cocumbar from '../Components/Cocumbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TastyMenu from '../Components/TastyMenu';

function Products() {
  return (
    <main className="h-auto w-full">
      <Header />
      <Cocumbar title="Products" />
      <TastyMenu />
      <Footer />
    </main>
  );
}

export default Products;
