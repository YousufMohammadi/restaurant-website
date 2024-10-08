import PropTypes from 'prop-types';

function BlogCard({ image }) {
  return (
    <div className="flex h-5/6 w-96 flex-col justify-start gap-5 rounded-lg bg-white shadow-lg">
      <img src={image} alt="blog" />
      <div className="flex w-full flex-col justify-start gap-5 px-5 pb-3">
        <a
          href="#"
          className="font-poppins text-lg font-bold text-gray-900 hover:text-red-600 md:text-xl"
        >
          The Ultimate Hangover Burger: Egg in a Hole Burger
        </a>
        <span className="md:text-md font-poppins text-base text-gray-800">
          June 16, 2024
        </span>
        <p className="font-poppins text-xs text-gray-700 md:text-sm">
          Nam varius tempor sapien, sit amet ullamcorper...
        </p>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
};
export default BlogCard;
