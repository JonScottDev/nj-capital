import bg from "@/assets/images/contact-bg.jpg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section
      className="relative h-screen bg-fixed flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* <!-- Dark Overlay --> */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-40 z-10"></div>
      {/* <!-- Contact Info + Form Container --> */}
      <div className="relative lg:flex justify-center z-10 pb-0 lg:pt-40 lg:pb-40">
        <div className="flex flex-col lg:flex-row overflow-hidden lg:shadow-lg bg-white rounded-xl">
          <div className="contact_form-first pt-32 pb-16 px-8 lg:px-20 lg:py-12 flex items-center justify-center">
            {/* <!-- Contact Info --> */}
            <div>
              <h2 className="text-2xl font-semibold mb-8 text-black">
                N&J Capital
              </h2>
              <h3 className="font-medium mb-5 text-black">
                Covering the South East Region
              </h3>
              <div>
                <div className="flex items-center mb-10">
                  <div className="p-2 rounded-full mr-6 bg-blue-400">
                    <svg
                      className="text-white fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 15 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <FaPhoneAlt />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-lg font-medium text-black">
                      Telephone Number
                    </span>
                    <span className="block text-sm font-medium text-gray-500">
                      (310) 892-1155
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-10">
                <div className="p-2 rounded-full mr-6 bg-blue-400">
                  <svg
                    className="text-white fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <FaEnvelope />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-medium text-black">
                    Email Address
                  </span>
                  <span className="block text-sm font-medium text-gray-500">
                    info@njcapital.org
                  </span>
                </div>
              </div>
              <h3 className="font-light mb-3 text-gray-500">
                Monday - Friday: 9am - 5pm
              </h3>
              <h3 className="font-light mb-3 text-gray-500">
                Saturday: 9am - 4pm
              </h3>
              <h3 className="font-light mb-3 text-gray-500">Sunday: Closed</h3>
            </div>
          </div>
          {/* <!-- Contact Form --> */}
          <div className="contact_form-second px-8 lg:px-20 py-20 lg:pt-12 lg:pb-20">
            <div className="flex justify-center">
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-black">
                  Let's get started!
                </h2>
                <span className="text-sm mb-1 text-black">
                  Please fill in the form below. We usually respond within 24
                  hours.
                </span>
                {/* <!-- Form --> */}
                <form
                  name="contact"
                  data-netlify="true"
                  autocomplete="off"
                  netlify-honeypot="bot-field"
                  className="block mt-4 overflow-hidden"
                >
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="input-animated">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      pattern="\S+.*"
                      placeholder="the placeholder"
                    />
                    <label htmlFor="name" className="label-name">
                      <span className="content-name">Name</span>
                    </label>
                  </div>
                  <div className="input-animated">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="the placeholder"
                    />
                    <label htmlFor="email" className="label-email">
                      <span className="content-email">Email</span>
                    </label>
                  </div>
                  <div className="input-animated">
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      required
                      placeholder="the placeholder"
                    />
                    <label htmlFor="phone" className="label-phone">
                      <span className="content-phone">Phone</span>
                    </label>
                  </div>
                  <div>
                    <textarea
                      name="question"
                      placeholder="Your Question"
                      id="question"
                      cols="30"
                      rows="5"
                      minLength="10"
                      maxLength="100"
                      className="w-full"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    id="submit-button"
                    className="w-full font-semibold uppercase text-center px-5 py-2 shadow-sm my-4 lg:mb-0 transition-colors duration-300 bg-blue-400 text-blue-50 hover:bg-blue-700 focus:ring-4 focus:ring-gray-300"
                  >
                    Send Message
                  </button>
                  <span
                    id="success"
                    className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-blue-500 bg-blue-100 text-green-600"
                  >
                    Thanks! We'll be in touch soon.
                  </span>
                  <span
                    id="error"
                    className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"
                  >
                    Whoops... Something went wrong.
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
