import PropTypes from 'prop-types';

function SuggestionCard({ image }) {
  return (
    <div className="relative h-full w-full">
      <img src={image} alt="suggest" className="h-full w-full" />
      <div className="absolute right-10 top-44 z-10 flex w-1/3 flex-col justify-center gap-7">
        <h3 className="w-40 bg-red-600 px-4 py-2 text-center font-poppins font-medium capitalize text-white">
          tasty menu
        </h3>
        <h1 className="w-2/3 font-poppins text-6xl font-bold capitalize leading-snug text-white">
          Burger Delights
        </h1>
        <h3 className="w-2/3 font-poppins text-xl font-medium capitalize text-white">
          Mouth Watering deliciousness
        </h3>
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
SuggestionCard.propTypes = {
  image: PropTypes.string.isRequired,
};
export default SuggestionCard;
