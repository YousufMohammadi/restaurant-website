import CategoryCard from './CategoryCard';

function Category() {
  return (
    <section className="flex flex-col items-center justify-start gap-5 py-10">
      <h3 className="bg-red-600 px-4 text-center font-poppins font-medium capitalize text-white">
        chose & enjoy
      </h3>
      <h1 className="w-2/5 px-2 text-center font-poppins text-5xl font-bold capitalize">
        What Do You Want To Eat Today?
      </h1>
      <div className="flex items-center justify-center gap-7 py-5">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  );
}

export default Category;
