import { motion } from "framer-motion";
import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/Animation - 1724705535964.json";
import { useRef } from "react";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar ">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/public/images/10884 - Copy.jpg"
            className="avatar "
            alt=""
          />
          <samp className="icon-verified"></samp>
        </div>

        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="sub-title">
          I am Abdelrahman Mohamed, a web software designer living in Egypt
          where we develop technologies that enable ordinary people to explore
          space on their own terms.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <a className="icon icon-github" href="https://github.com/Abdelrahman1ll?tab=repositories"></a>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            //https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          style={{ height: 500 }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
