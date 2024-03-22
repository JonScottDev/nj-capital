import Image from "next/image";
import profilePic from "@/public/images/profile.jpg";

const AboutSection = () => {
  return (
    <section>
      {/* <!-- Container for About Section --> */}
      <div className="flex flex-col gap-y-40 py-12 md:w-3/4 md:mx-auto lg:w-2/3">
        {/* About Section Author */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-36">
          <p className="mt-10 lg:mt-0 order-last relative leading-relaxed text-center md:text-left text-xl md:text-2xl sm:px-5 italic text-black">
            "Our team is knowledgeable and compassionate about providing
            homeowners with the best solutions."
          </p>
          {/* About Image */}
          <div>
            <div className="mx-auto">
              {/* <img className="w-full h-full object-cover" src="./images/Testimonials/man.png" alt=""> */}
              <Image
                src={profilePic}
                width={300}
                height={300}
                className="rounded-lg mx-auto"
                alt="michele waters"
              />
            </div>
            <div className="flex flex-col mt-1 text-sm lg:text-base">
              <span className="text-right font-semibold text-black mx-auto text-2xl pt-3">
                Michele Waters
              </span>
              <span className="text-right text-blue-400 mx-auto">
                President & Founder, N&J Capital
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
