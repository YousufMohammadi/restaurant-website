import BlogCard from './BlogCard';
import image1 from '../assets/blog1.jpg';
import image2 from '../assets/blog2.jpg';
import image3 from '../assets/blog3.jpg';
function Blog() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-5 pt-5">
      <h3 className="bg-red-600 px-4 py-1 text-center font-poppins text-sm font-normal capitalize text-white md:py-2 md:text-base md:font-medium">
        Latest from the blog
      </h3>
      <h1 className="w-full px-3 text-center font-poppins text-xl font-bold capitalize md:w-3/5 md:text-2xl lg:text-5xl">
        What Do You Want To Eat Today?
      </h1>
      <div className="flex w-10/12 flex-wrap items-center justify-center gap-5 py-5 md:w-full">
        <BlogCard image={image1} />
        <BlogCard image={image2} />
        <BlogCard image={image3} />
      </div>
    </section>
  );
}

export default Blog;
