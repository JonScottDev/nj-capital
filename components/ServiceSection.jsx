import Image from "next/image";
import { FaHome, FaUserTie } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 md:py-32 bg-gray-50 ">
      <div className="md:flex md:gap-y-0 md:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h6 className="text-sm uppercase font-semibold tracking-widest text-gray-500">
            Our specialty
          </h6>
          <h2 className="text-3xl leading-tight font-bold mt-4">
            This is the start of your business success
          </h2>
          <p className="text-lg font-medium mt-4">
            Where industry insight and marketing expertise meet
          </p>
          <p className="mt-2 leading-relaxed">
            Whether you are a homeowner or real estate investor, our team has
            the tools and expertise to solve your problems the right way, the
            first time.
          </p>
        </div>

        <div className="w-full px-4 mt-24 md:mt-0 lg:w-1/2 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div>
              <div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">
                <svg
                  className="fill-current text-blue-500"
                  width="24"
                  height="29"
                  viewBox="0 0 24 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <FaHome fontSize={25} />
                </svg>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8">
              <h4 className="text-xl font-bold">
                Simple Solutions for Homeowners
              </h4>
              <p className="mt-2 leading-relaxed">
                Ready to assist you in finding the right solution. All sizes do
                not fit all! Different situations require different solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-24 md:mt-12">
            <div>
              <div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">
                <svg
                  className="fill-current text-blue-500"
                  width="24"
                  height="29"
                  viewBox="0 0 24 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <FaUserTie fontSize={25} />
                </svg>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8">
              <h4 className="text-xl font-bold">
                We Make it Easy for Investors
              </h4>
              <p className="mt-2 leading-relaxed">
                We find the properties for you at discounted rates. You don't
                want to be bothered with the hassles of rehabbing property? Will
                do it for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
