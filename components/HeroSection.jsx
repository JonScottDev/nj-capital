import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="hero__container h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* <!-- Dark Overlay --> */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="text-center text-5xl lg:text-7xl uppercase text-gray-50 font-medium">
          Creative Real Estate Solutions
        </h1>
        <p className="text-lg mx-4 lg:mx-0 lg:text-xl font-medium text-gray-100 mt-12 mb-16 max-w-prose lg:w-2/3 leading-relaxed text-center">
          Real solutions by real people. Reach out to us today and let us help
          you increase you profit margins!
        </p>
        <div className="flex flex-col md:block">
          <Link
            className="inline-block uppercase text-center font-semibold px-5 py-2 lg:px-10 border border-gray-500 text-gray-50 mx-2 lg:mx-8 hover:border-gray-50 hover:shadow-md focus:ring-2 focus:ring-blue-300"
            href="#contact-form"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
