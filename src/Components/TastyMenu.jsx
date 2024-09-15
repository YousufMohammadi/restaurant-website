import TastyCard from './TastyCard';

function TastyMenu() {
  return (
    <section className="flex flex-col items-center justify-start gap-5 py-10">
      <h3 className="bg-red-600 px-4 text-center font-poppins font-medium capitalize text-white">
        tasty menu
      </h3>
      <h1 className="w-2/5 px-2 text-center font-poppins text-5xl font-bold capitalize">
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
    </section>
  );
}

export default TastyMenu;
