import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-green" : ""}
        hover:text-green transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <section className="max-w-[1560px]">
      <div className="z-40 w-full fixed top-0 ">
        <div className="flex items-center justify-between h-[70px]  mx-auto w-[90%]">
          {/* right */}
          <div className="w-12">
            <h1>David</h1>
          </div>

          {/* desktop nav */}
          {isAboveSmallScreens ? (
            <div className="flex justify-between gap-16 font-body text-sm font-semibold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <button
              className=""
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>
          )}
          {/* mobile view*/}
          {!isAboveSmallScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-green w-[300px]">
              <div className="flex justify-end py-10 px-16">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img alt="close-icon" src="../assets/close-icon.svg" />
                </button>
              </div>

              {/*Menu Items*/}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl">
                <Link
                  page="home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
