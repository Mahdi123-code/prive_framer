import React from 'react'
import { Link } from "react-router-dom";


const Project = () => {

      // ==========================================
  // PROJECT DATA
  // ==========================================
  const projects = [
    {
      year: "2026",
      title: "TrailType",
      description: "Modern design inspired by the great outdoors.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      year: "2026",
      title: "The Spark Sessions",
      description: "A podcast for creators chasing meaningful work.",
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
    },
    {
      year: "2025",
      title: "Into the Wild",
      description: "A raw journey through nature's extremes.",
      image:
        "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1000&q=80",
    },
  ];
  return (
    <div>
      {/* =====================================================
    LATEST PROJECTS
====================================================== */}
    <div
        className="
        mt-7
        grid
        grid-cols-1
        gap-7
        md:grid-cols-2
        lg:grid-cols-3
        "
    >

        {projects.map((project) => (
        <Link
            to="/work"
            key={project.title}
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
                src={project.image}
                alt={project.title}
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

            {/* Soft hover overlay */}
            <div
                className="
                pointer-events-none
                absolute
                inset-0
                bg-white/0
                transition-all
                duration-500
                group-hover:bg-white/[0.03]
                "
            />

            {/* Year */}
            <div
                className="
                absolute
                inset-x-0
                top-0
                pt-2
                text-center
                text-[50px]
                font-light
                leading-none
                tracking-[-2px]
                text-white/70
                drop-shadow-sm
                transition-all
                duration-500
                group-hover:text-white/80
                "
            >
                {project.year}
            </div>

            </div>


            {/* ==========================================
                PROJECT INFORMATION
            =========================================== */}
            <div className="mt-4">

            {/* Title + Arrow */}
            <div className="flex items-center justify-between">

                <h3
                className="
                    text-[19px]
                    font-semibold
                    tracking-[-0.5px]
                    text-black

                    transition-colors
                    duration-300

                    group-hover:text-orange-500
                "
                >
                {project.title}
                </h3>


                {/* Arrow */}
                <span
                className="
                    flex
                    h-[27px]
                    w-[27px]
                    shrink-0
                    items-center
                    justify-center

                    text-orange-500

                    opacity-0
                    translate-x-[-5px]

                    transition-all
                    duration-300

                    group-hover:translate-x-0
                    group-hover:opacity-100
                "
                >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                >
                    <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="1"
                    />

                    <path d="M8 16L16 8" />

                    <path d="M10 8H16V14" />
                </svg>
                </span>

            </div>


            {/* Description */}
            <p
                className="
                mt-2
                max-w-[310px]
                text-[15px]
                leading-[1.55]
                text-[#4a4a4a]
                "
            >
                {project.description}
            </p>

            </div>

        </Link>
        ))}

    </div>
    </div>
  )
}

export default Project
