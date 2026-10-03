import React from 'react'
import { Link } from "react-router-dom";

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
const Post = () => {
  return (
    <div>
      <div className="mt-5">

          {posts.map((post) => (
            <Link
              to="/blog"
              key={post.title}
              className="
                group
                flex
                min-h-[47px]
                items-center
                border-b
                border-[#dedede]
                transition-colors
                hover:bg-[#fafafa]
              "
            >

              {/* Date */}
              <span
                className="
                  w-[95px]
                  shrink-0
                  text-[14px]
                  text-[#777777]
                  sm:w-[95px]
                "
              >
                {post.date}
              </span>


              {/* Title */}
              <span
                className="
                  text-[15px]
                  font-normal
                  tracking-[-0.2px]
                  text-[#181818]
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  sm:text-[16px]
                "
              >
                {post.title}
              </span>

            </Link>
          ))}

        </div>
    </div>
  )
}

export default Post;
