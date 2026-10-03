import { Link } from "react-router-dom";
import NewSletter from "../../components/NewSletter/NewSletter";

function Home() {
  const aboutData = [
    {
      title: "TrailType",
      description: "Throughout my career, I’ve always been driven by a desire to break boundaries, whether that means pushing the limits of what’s possible in media or venturing into the unknown in my personal life. I’m a firm believer that creativity isn’t just about thinking outside the box; it’s about reinventing the box itself. In my work, I focus on combining fresh ideas with practical solutions to create something unique that resonates on both an emotional and intellectual level. When I'm not immersed in creative projects, you’ll likely find me in the great outdoors. Whether I'm scaling rock faces, hiking through remote landscapes, or simply soaking in the energy of nature, I thrive in environments that challenge both my body and mind. To me, life is all about climbing to new heights—both literally and figuratively. Every hike, every ascent, is a reminder that growth comes from embracing challenges and stepping outside your comfort zone.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "The Spark Sessions",
      description: "I'm always looking for new ways to merge my passions for creativity, exploration, and innovation. If you're interested in collaborating, or just want to share stories about the latest adventure, I’d love to connect!",
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
    },
  ];

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
        {/* hero */}
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
                About Me
              </h1>

            </div>

          </div>


          {/* Introduction */}
          <div className="mt-14 max-w-[920px]">

            <p
              className="
                text-[16px]
                text-[#404040]
                sm:text-[17px]
              "
            >
              An adventurer and creative explorer currently based in New York.
            </p>

            <p
              className="
                mt-5
                text-[16px]
                text-[#404040]
                sm:text-[17px]
              "
            >
              With a rich background in the entertainment industry, I’ve spent years honing my skills in storytelling, production, and innovation. But today, my passion lies in blending creativity with purpose - finding new, impactful ways to connect ideas, spark conversation, and build meaningful projects that leave a lasting impression.
            </p>

          </div>

        </div>
      </section>

    {/* Body section */}
    <section className="mt-24">

    {/* Projects */}
    <div
        className="
        mt-7
        "
    >

        {aboutData.map((data) => (
        <Link
            to="/work"
            key={data.title}
            className="group block"
        >

            {/* ==========================================
                IMAGE
            =========================================== */}
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
                src={data.image}
                alt={data.title}
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

            <div className="mt-5">


            {/* Description */}
            <p
                className="
                mt-2
                w-full
                text-[18px]
                leading-[1.55]
                text-[#4a4a4a]
                py-10
                "
            >
                {data.description}
            </p>

            </div>

        </Link>
        ))}

    </div>

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