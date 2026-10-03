import { NavLink } from "react-router-dom";

function Footer() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <footer className="w-full bg-white pb-8 pt-10">

      {/* Top Border */}
      <div className="border-t border-[#cfcfcf]">

        <div
          className="
            flex
            flex-col
            gap-5
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* =========================
              COPYRIGHT
          ========================== */}
          <p
            className="
              text-[14px]
              font-normal
              tracking-[-0.1px]
              text-[#202020]
            "
          >
            © Luke Williams | 2026
          </p>


          {/* =========================
              FOOTER NAVIGATION
          ========================== */}
          <nav
            className="
              flex
              flex-wrap
              items-center
              gap-5
            "
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  text-[14px]
                  font-normal
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? "text-orange-500"
                      : "text-[#252525] hover:text-orange-500"
                  }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

        </div>

      </div>

    </footer>
  );
}

export default Footer;