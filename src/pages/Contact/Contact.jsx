import { Link } from "react-router-dom";
import NewSletter from "../../components/NewSletter/NewSletter";
import Post from "../../components/Post/Post";

function Contact() {

  return (
    <div className="w-full bg-white text-[#171717]">

      {/* =====================================================
          HERO / INTRODUCTION
      ====================================================== */}
      <section className="pt-28 sm:pt-16 lg:pt-24">

        {/* Name + Role + Location */}
        <div className="flex flex-col gap-6">

          <div>

            <div>
              <h1
                className="
                  text-[58px]
                  font-bold
                  leading-[0.95]
                  tracking-[-3px]
                  text-black
                  sm:text-[72px]
                  lg:text-[82px]
                  xl:text-[88px]
                "
              >
                Get in touch
              </h1>
            </div>

          </div>


          {/* Introduction */}
          <div className="mt-14 max-w-[920px]">

            <p
              className="
                text-[16px]
                leading-[1.65]
                tracking-[-0.15px]
                text-[#404040]
                sm:text-[17px]
              "
            >
              Have a project in mind, a collaboration to pitch, or just a story from the trail to share? Fill out the form below and I’ll get back to you as soon as I can.
            </p>

          </div>

        </div>
      </section>

     <section className="mt-14 max-w-[920px]">
      <form className="flex flex-col gap-6">
        {/* Top Row: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-700 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-700 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me about your project or idea..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-y"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition-colors focus:outline-none"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
      <section className="mt-32">
        <p
              className="
                text-[16px]
                leading-[1.65]
                tracking-[-0.15px]
                text-[#404040]
                sm:text-[17px]
              "
            >
              Prefer email? Reach me directly at-
              <a
                href="mailto:luke@framer.com"
                className="text-orange-500 hover:underline transition-colors duration-300"
              >
                luke@framer.com
              </a>.
            </p>
      </section>
      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <div>
        <NewSletter/>
      </div>

    </div>
  );
}

export default Contact;