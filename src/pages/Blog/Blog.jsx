import { Link } from "react-router-dom";
import Project from "../../components/Project/Project";
import NewSletter from "../../components/NewSletter/NewSletter";
import Post from "../../components/Post/Post";

function Blog() {

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
                My Blog
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
              Welcome to my favourite little corner on this website.
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
              Here’s where I share stories from the road, reflections on creativity, and insights from the ever-evolving adventure of building, exploring, and growing. Whether it's lessons from the wild or thoughts sparked by late-night brainstorming sessions, this space captures the journey in motion.
            </p>

          </div>

        </div>
      </section>

      <section className="mt-28">
        <div
            className="
                relative
                aspect-[1.43/1]
                overflow-hidden
                rounded-[6px]
                bg-[#eeeeee]
            "
            >

            <img
                src={"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"}
                alt="Adventure landscape"
                className="
                h-full
                w-full
                object-cover

                transition-all
                duration-500
                ease-out

                group-hover:scale-[1.04]
                group-hover:brightness-[1.08]
                group-hover:saturate-[1.08]
                "
            />

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
            All Posts
          </h2>


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

export default Blog;