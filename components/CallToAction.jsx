import Link from "next/link";

const CallToAction = () => {
  return (
    <section
      className="chiropractor_select relative h-full py-24 lg:h-96 flex flex-col items-center justify-center shadow-inner bg-fixed"
      style={{
        backgroundImage: `url('/images/cta_img.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* <!-- Dark Overlay --> */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80 z-10"></div>
      <div className="relative z-20">
        <h2 className="text-center mb-4 mx-4 lg:mx-0 font-semibold text-5xl text-gray-50">
          Always the Right Investment
        </h2>
        <p className="text-xl text-center mx-4 lg:mx-auto lg:w-2/3 my-10 text-gray-100">
          We work hard for you.
        </p>
        <div className="md:block text-center">
          <Link
            className="inline-block uppercase text-center font-semibold px-5 py-2 lg:px-10 border border-gray-500 text-gray-50 mx-2 lg:mx-8 hover:border-gray-50 hover:shadow-md focus:ring-2 focus:ring-blue-300"
            href="#contact-form"
          >
            Get Started Today!
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
