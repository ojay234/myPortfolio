import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import { useEffect, useLayoutEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import "./app.css";
import About from "./scenes/About";
import Loader from "./components/loader/Loader";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="app bg-black_bg">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <div className="sections">
            <Landing />
            <About
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Projects />
            <Contact />
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
