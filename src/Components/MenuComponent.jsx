import MenuCard from './MenuCard';

function MenuComponent() {
  return (
    <section className="mt-5 flex flex-col items-center justify-center gap-5">
      <h1 className="mb-5 font-poppins text-xl font-bold capitalize text-gray-900 md:text-2xl lg:text-5xl">
        Menu Offers
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-10/12 lg:flex-row">
        <MenuCard />
        <MenuCard />
      </div>
    </section>
  );
}

export default MenuComponent;
