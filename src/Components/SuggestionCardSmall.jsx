import PropTypes from 'prop-types';

function SuggestionCardSmall({ image }) {
  return (
    <div className="relative h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[350px] lg:w-[350px]">
      <img src={image} alt="suggest" className="h-full w-full" />
      <div className="absolute left-10 top-10 z-10 flex flex-col justify-center gap-5">
        <h3 className="w-full font-poppins text-xl font-bold capitalize md:w-4/5 md:text-2xl lg:text-4xl">
          The New Steak Burger
        </h3>
        <span className="font-poppins text-xl font-bold text-red-700">
          $12.99
        </span>
        <a
          href="#"
          className="w-36 rounded-full bg-red-700 px-3 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 lg:w-60 lg:px-5 lg:py-4 lg:text-xl lg:font-normal"
        >
          order now
        </a>
      </div>
    </div>
  );
}
SuggestionCardSmall.propTypes = {
  image: PropTypes.string.isRequired,
};
export default SuggestionCardSmall;
