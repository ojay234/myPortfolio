import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-light_yellow before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-light_yellow before:left-[-50%]
    before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyles : "bg-gray-600"}
            w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-gray-600"
        }
            w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-gray-600"
        }
            w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-gray-600"
        }
            w-3 h-3 rounded-full`}
        href="#testimonials"
        onClick={() => setSelectedPage("testimonials")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "contacts" ? selectedStyles : "bg-gray-600"
        }
            w-3 h-3 rounded-full`}
        href="#contacts"
        onClick={() => setSelectedPage("contacts")}
      ></AnchorLink>
    </div>
  );
};

export default DotGroup;
