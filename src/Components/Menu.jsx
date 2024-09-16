import MenuCard from './MenuCard';

function Menu() {
  return (
    <section className="flex h-screen flex-col items-center justify-start gap-5 pt-10">
      <h1 className="px-2 text-center font-poppins text-5xl font-bold capitalize text-gray-900">
        Menu Offers
      </h1>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-5">
        <MenuCard />
        <MenuCard />
      </div>
    </section>
  );
}

export default Menu;
