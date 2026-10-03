import { Link } from "react-router-dom";
import Project from "../../components/Project/Project";
import NewSletter from "../../components/NewSletter/NewSletter";
import Post from "../../components/Post/Post";

function Home() {

  return (
    <div className="w-full bg-white text-[#171717]">

      {/* =====================================================
          HERO / INTRODUCTION
      ====================================================== */}
      <section className="pt-28 sm:pt-16 lg:pt-24">

        {/* Name + Role + Location */}
        <div className="flex flex-col gap-6">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

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
                Luke Williams
              </h1>

              <p
                className="
                  mt-5
                  text-[16px]
                  font-semibold
                  tracking-[-0.2px]
                  text-[#303030]
                  sm:text-[17px]
                "
              >
                Founder - Matrix Designs
              </p>
            </div>

            {/* Location */}
            <div
              className="
                flex
                items-center
                gap-2
                text-[16px]
                font-semibold
                text-[#303030]
                lg:mb-1
              "
            >
              <span className="text-[18px]">📍</span>
              <span>New York</span>
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
              Hi there! I’m an adventurer based in New York, with a
              background in the entertainment industry. These days, I’m
              driven by a love for creativity and innovation, constantly
              exploring new ways to connect ideas and build something
              meaningful.
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
              When I’m not immersed in my projects, you’ll find me
              outdoors – scaling rock faces, hiking scenic trails, and
              embracing the energy of nature. Life is all about climbing
              to new heights, both literally and figuratively!
            </p>

          </div>

        </div>
      </section>



{/* =====================================================
    LATEST PROJECTS
====================================================== */}
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
            Latest Projects
          </h2>

          <Link
            to="/blog"
            className="
              hidden
              text-[14px]
              text-[#383838]
              transition-colors
              hover:text-orange-500
              sm:block
            "
          >
            View all
          </Link>

        </div>


    {/* Projects */}
    <div>
      <Project/>
    </div>

    </section>


      {/* =====================================================
          LATEST POSTS
      ====================================================== */}
      <section className="mt-28">

        {/* Heading */}
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
            Latest Posts
          </h2>

          <Link
            to="/blog"
            className="
              hidden
              text-[14px]
              text-[#383838]
              transition-colors
              hover:text-orange-500
              sm:block
            "
          >
            View all
          </Link>

        </div>


        {/* Posts */}
        <Post/>

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

export default Home;