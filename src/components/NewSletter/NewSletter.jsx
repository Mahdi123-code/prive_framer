import React from 'react'

const NewSletter = () => {
  return (
    <div>
      <section className="mt-20">

        <div
          className="
            rounded-[5px]
            border
            border-[#d9d9d9]
            bg-[#f3f3f3]
            p-5
            sm:p-7
            lg:p-8
          "
        >

          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-7
              md:grid-cols-[210px_1fr]
              lg:grid-cols-[220px_1fr]
            "
          >

            {/* Newsletter image */}
            <div
              className="
                aspect-[1.35/1]
                overflow-hidden
                rounded-[4px]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                alt="Adventure landscape"
                className="h-full w-full object-cover"
              />
            </div>


            {/* Newsletter content */}
            <div>

              <h2
                className="
                  text-[27px]
                  font-semibold
                  leading-tight
                  tracking-[-1.2px]
                  text-black
                  sm:text-[29px]
                "
              >
                Subscribe to my Newsletter
              </h2>


              {/* Form */}
              <form
                onSubmit={(event) => event.preventDefault()}
                className="
                  mt-6
                  flex
                  flex-col
                  gap-2
                  sm:flex-row
                "
              >

                <input
                  type="email"
                  placeholder="name@email.com"
                  aria-label="Email address"
                  className="
                    h-[42px]
                    min-w-0
                    flex-1
                    rounded-[5px]
                    border
                    border-[#cccccc]
                    bg-white
                    px-3
                    text-[15px]
                    text-black
                    outline-none
                    placeholder:text-[#777]
                    focus:border-[#999]
                  "
                />

                <button
                  type="submit"
                  className="
                    h-[42px]
                    rounded-[5px]
                    bg-[#3a3a3a]
                    px-5
                    text-[15px]
                    font-medium
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-black
                  "
                >
                  Subscribe
                </button>

              </form>


              <p
                className="
                  mt-4
                  max-w-[520px]
                  text-[14px]
                  leading-[1.55]
                  text-[#444]
                "
              >
                Sign up to stay updated about my latest work and
                adventures.{" "}
                <em>No Spam, No BS. Promise!</em>
              </p>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default NewSletter
