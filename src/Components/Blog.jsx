import BlogCard from './BlogCard';
import image1 from '../assets/blog1.jpg';
import image2 from '../assets/blog2.jpg';
import image3 from '../assets/blog3.jpg';
function Blog() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-5">
      <h3 className="bg-red-600 px-4 py-1 text-center font-poppins font-medium capitalize text-white">
        Latest from the blog
      </h3>
      <h1 className="w-2/5 px-2 text-center font-poppins text-5xl font-bold capitalize leading-snug">
        What Do You Want To Eat Today?
      </h1>
      <div className="flex w-full flex-wrap items-center justify-center gap-5 py-5">
        <BlogCard image={image1} />
        <BlogCard image={image2} />
        <BlogCard image={image3} />
      </div>
    </section>
  );
}

export default Blog;
