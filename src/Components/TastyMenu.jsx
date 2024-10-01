import TastyCard from './TastyCard';

function TastyMenu() {
  return (
    <section className="flex flex-col items-center justify-start gap-5 px-5 py-10">
      <h3 className="bg-red-600 px-4 py-1 text-center font-poppins text-sm font-normal capitalize text-white md:py-2 md:text-base md:font-medium">
        tasty menu
      </h3>
      <h1 className="w-full px-3 text-center font-poppins text-xl font-bold capitalize md:w-3/5 md:text-2xl lg:text-5xl">
        choose & enjoy
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-7 py-10">
        <TastyCard />
        <TastyCard />
        <TastyCard />
        <TastyCard />
        <TastyCard />
        <TastyCard />
      </div>
      <a
        href="#"
        className="w-36 rounded-full bg-red-700 px-3 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 lg:w-60 lg:px-5 lg:py-4 lg:text-xl lg:font-normal"
      >
        view all product
      </a>
    </section>
  );
}

export default TastyMenu;
