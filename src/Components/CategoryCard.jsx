import PropTypes from 'prop-types';

function CategoryCard({ title, icon }) {
  return (
    <div className="flex h-56 w-44 cursor-pointer flex-col items-center justify-center gap-7 rounded-2xl bg-gray-100 shadow-lg hover:bg-red-600">
      {icon}
      <span className="font-poppins font-bold uppercase text-black">
        {title}
      </span>
    </div>
  );
}
CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default CategoryCard;
