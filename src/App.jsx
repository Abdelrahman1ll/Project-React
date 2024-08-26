import { useState } from "react";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Main from "./components/3-main/main";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{ opacity: showScrollBTN ? 1:0,transition:'1s '}} href="#up">
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
