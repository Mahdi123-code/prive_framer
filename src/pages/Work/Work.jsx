import { Link } from "react-router-dom";
import Project from "../../components/Project/Project";
import NewSletter from "../../components/NewSletter/NewSletter";

function Work() {

  // ==========================================
  // BLOG POSTS
  // ==========================================
  const posts = [
    {
      date: "Jul 2025",
      title: "How I built my Framer template empire",
    },
    {
      date: "Jun 2025",
      title: "My journey from $0 to $10K MRR",
    },
    {
      date: "Jun 2025",
      title: "Is vibe coding here to stay?",
    },
    {
      date: "May 2025",
      title: "Don't complain, create!",
    },
  ];

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
                My Work
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
              My work is driven by a passion for creativity and innovation.
            </p>

            <p
              className="
                mt-5
                text-[16px]
                leading-[1.65]
                tracking-[-0.15px]
                text-[#404040]
                sm:text-[17px]
              "
            >
              With a background in the entertainment industry, I specialise in crafting unique, impactful projects that tell compelling stories and connect people in meaningful ways.  I thrive on exploring new ideas, pushing boundaries, and building solutions that not only engage but inspire.
            </p>

          </div>

        </div>
      </section>



    {/* // All Projects */}
    <section className="mt-32">

    {/* Section heading */}
    <div className="flex items-end justify-between border-b border-[#ffb899] pb-2">

          <h2
            className="
              text-[27px]
              font-semibold
              leading-none
              tracking-[-1.2px]
              text-black
            "
          >
            All Projects
          </h2>

        </div>


    {/* Projects */}
    <div>
      <Project/>
    </div>

    </section>

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
              My work is driven by a passion for creativity and innovation.
            </p>

            <p
              className="
                mt-5
                text-[16px]
                leading-[1.65]
                tracking-[-0.15px]
                text-[#404040]
                sm:text-[17px]
              "
            >
              With a background in the entertainment industry, I specialise in crafting unique, impactful projects that tell compelling stories and connect people in meaningful ways.  I thrive on exploring new ideas, pushing boundaries, and building solutions that not only engage but inspire.
            </p>

          </div>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <div>
        <NewSletter/>
      </div>

    </div>
  );
}

export default Work;