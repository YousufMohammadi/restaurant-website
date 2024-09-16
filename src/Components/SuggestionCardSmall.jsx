import PropTypes from 'prop-types';

function SuggestionCardSmall({ image }) {
  return (
    <div className="relative h-full w-full">
      <img src={image} alt="suggest" className="h-full w-full" />
      <div className="absolute left-10 top-10 z-10 flex w-1/3 flex-col justify-center gap-7">
        <h3 className="text-dark w-60 font-poppins text-3xl font-bold capitalize">
          The New Steak Burger
        </h3>
        <span className="font-poppins text-xl font-bold text-red-700">
          $12.99
        </span>
        <a
          href="#"
          className="w-44 rounded-full bg-red-700 px-5 py-4 text-center font-poppins font-normal capitalize text-white hover:bg-red-600"
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
