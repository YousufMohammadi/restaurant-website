function Introduction() {
  return (
    <section className="introduction absolute left-0 top-60 z-20 flex h-fit w-full flex-col gap-5 px-5 lg:w-1/3">
      <h1 className="w-full font-poppins text-xl font-bold leading-snug text-white lg:text-5xl">
        Combo <strong className="text-red-600">Burger</strong> with Cold Drink
      </h1>
      <p className="font-poppins text-xs text-yellow-100 lg:text-base">
        Praese feugiat placerat levolut pavehicula placerat raese feugiat
      </p>
      <a
        href="#"
        className="w-36 rounded-full bg-red-700 px-3 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 lg:px-5 lg:py-4 lg:text-xl lg:font-normal"
      >
        discover more
      </a>
    </section>
  );
}

export default Introduction;
