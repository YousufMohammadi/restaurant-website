import PropTypes from 'prop-types';

function SuggestionCard({ image }) {
  return (
    <div className="relative h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-fit lg:w-11/12">
      <img src={image} alt="suggest" className="h-full w-full" />
      <div className="absolute left-10 top-10 z-10 flex flex-col justify-center gap-5">
        <h3 className="w-44 bg-red-600 py-1 text-center font-poppins text-sm font-normal capitalize text-white md:py-2 md:text-base md:font-medium">
          tasty menu
        </h3>
        <h1 className="w-full font-poppins text-xl font-bold capitalize text-white md:w-3/5 md:text-2xl lg:text-5xl">
          Burger Delights
        </h1>
        <h3 className="w-full font-poppins text-sm text-white md:w-full md:text-start md:text-base">
          Mouth Watering deliciousness
        </h3>
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
SuggestionCard.propTypes = {
  image: PropTypes.string.isRequired,
};
export default SuggestionCard;
