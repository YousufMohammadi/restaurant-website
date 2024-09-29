import Cocumbar from '../Components/Cocumbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TastyMenu from '../Components/TastyMenu';

function Products() {
  return (
    <main className="h-auto w-full">
      <Header />
      <Cocumbar title="Products" />
      <div className="mt-56 pb-10 pt-20">
        <TastyMenu />
      </div>
      <Footer />
    </main>
  );
}

export default Products;
