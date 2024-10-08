import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);

  //   Set Toggle Menu

  const togglemenu = () => {
    setisMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //  Navitems array
  const navitem = [
    { link: "Home", patch: "home" },
    { link: "Features", patch: "features" },
    { link: "Community", patch: "community" },
    { link: "Blog", patch: "blog" },
    { link: "Pricing", patch: "pricing" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src="assets/logo.svg" alt="" className="w-10 inline-block items-center" />
            <span className="text-brandSecondary uppercase">Nexcent</span>
          </a>
          {/* nav item for large devices */}
          <ul className="md:flex space-x-12 hidden items-center">
            {navitem.map(({ link, patch }) => (
              <Link
                key={patch}
                to={patch}
                spy={true}
                offset={-100}
                className="block text-base text-gray-900 hover:text-brandPrimary
                first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
            <div className="space-x-12 hidden lg:flex items-center">
              <button
                className="bg-brandPrimary text-white py-2 px-4 transition-all
            duration-300 rounded hover:bg-neutralDGrey "
              >
                Register Now
              </button>
            </div>
          </ul>

          <div className="md:hidden">
            <button
              className="focous:outline-none focus:text-gray-500
            "
              onClick={togglemenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6 text-neutralDGrey" />
              )}
            </button>
          </div>
        </div>

        {/* nav item for mobile devices */}

        <div
          className={`space-y-4 px-4 mt-16 py-7 md:hidden bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } `}
        >
          {navitem.map(({ link, patch }) => (
            <Link
              key={patch}
              to={patch}
              spy={true}
              offset={-100}
              className="block text-base text-white hover:text-brandPrimary
                first:font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
