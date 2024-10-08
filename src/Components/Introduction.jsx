function Introduction() {
  return (
    <section className="introduction absolute left-0 top-60 z-20 flex h-fit w-full flex-col gap-5 px-5">
      <h1 className="w-full font-poppins text-xl font-bold text-white md:text-3xl lg:w-5/12 lg:text-5xl lg:leading-snug">
        Combo <strong className="text-red-600">Burger</strong> with Cold Drink
      </h1>
      <p className="font-poppins text-xs text-slate-300 lg:text-base">
        Praese feugiat placerat levolut pavehicula placerat raese feugiat
      </p>
      <a
        href="#"
        className="w-36 rounded-full bg-red-700 px-3 py-2 text-center font-poppins text-sm font-light capitalize text-white hover:bg-red-600 lg:w-60 lg:px-5 lg:py-4 lg:text-xl lg:font-normal"
      >
        discover more
      </a>
    </section>
  );
}

export default Introduction;
