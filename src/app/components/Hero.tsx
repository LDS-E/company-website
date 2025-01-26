const Hero = () => (
  <section className="hero from-white via-transparent to-transparent bg-cover h-[80vh] bg-[url('/images/01.jpg')] px-5 py-10 text-center flex flex-col justify-center items-center">
    <h1 className="hero__title bg-[#63c6ae] text-white text-3xl font-semibold py-6 px-8 uppercase">
      Welcome to Our Site
    </h1>
    <p className="hero__text bg-[#242a2c] text-white text-lg p-6 mt-5 mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <a
      href="#"
      className="hero__btn bg-[#69c6ae] text-white py-4 px-8 rounded-md text-lg font-semibold uppercase hover:bg-[#63c6ae] transition-all"
    >
      Get Started
    </a>
  </section>
);

export default Hero;
