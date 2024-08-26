import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./main.css";
import { myProjects } from "./myProjects.1";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = function (buttonCategory) {
    setcurrentActive(buttonCategory);

    const mewArr = myProjects.filter((item) => {
      return item.category === buttonCategory;
    });
    setArr(mewArr);
  };

  return (
    <main className="flex">
      <section className="  left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");

            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            handleClick("next");
          }}
          className={currentActive === "next" ? "active" : null}
        >
          Next.js
        </button>
      </section>

      <section className="flex  right-section">
      <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.imgpath}
              className="card"
            >
              <img width={266} src={item.imgpath} alt="" />
              <div style={{ width: "266px" }} className=" box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.pergraph}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a className="icon-link" href="https://abdelrahman1ll.github.io/Small-project/"></a>
                    <a className="icon-github"  href="https://github.com/Abdelrahman1ll/Small-project"> </a>
                  </div>

                  <a className="link flex" href="https://abdelrahman1ll.github.io/Small-project/">
                    more <samp className="icon-arrow-right"></samp>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
