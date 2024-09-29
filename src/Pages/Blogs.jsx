import Blog from '../Components/Blog';
import Cocumbar from '../Components/Cocumbar';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Blogs() {
  return (
    <main className="h-auto w-full">
      <Header />
      <Cocumbar title="Blogs" />
      <div className="mt-56 pb-10 pt-20">
        <Blog />
      </div>
      <Footer />
    </main>
  );
}

export default Blogs;
