import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

library.add(fab, fas);

function App() {
  const [small, setSmall] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);

  const homeScroll = () => homeRef.current.scrollIntoView();
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const skillsScroll = () => skillsRef.current.scrollIntoView();
  const toolsScroll = () => toolsRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, [window.pageYOffset]);

  return (
    <div style={{ paddingTop: "0px" }}>
      <Navbar
        homeScroll={homeScroll}
        aboutScroll={aboutScroll}
        skillsScroll={skillsScroll}
        toolsScroll={toolsScroll}
        contactScroll={contactScroll}
        small={small}
      />

      <Home ref={homeRef} />

      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Tools ref={toolsRef} />

      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
