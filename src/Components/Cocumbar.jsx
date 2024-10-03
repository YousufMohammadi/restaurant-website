import PropTypes from 'prop-types';
function Cocumbar(props) {
  return (
    <section className="cocumbar relative">
      <span className="absolute left-28 top-1/3 font-poppins text-4xl font-bold text-slate-900">
        {props.title}
      </span>
    </section>
  );
}

export default Cocumbar;

Cocumbar.propTypes = {
  title: PropTypes.string.isRequired,
};
