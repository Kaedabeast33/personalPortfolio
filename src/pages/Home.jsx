import React from "react";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context/GlobalContext";
import { useAnimationControls } from "framer-motion";
// import {icon} from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion, useInView, useMotionValueEvent } from "framer-motion";

const Home = () => {
  //First and last two need to be in twice
  const projects = [
    {
      id: 1,
      img: "../assets/png.png",
    },
    {
      id: 2,
      img: "../assets/png.png",
    },
    {
      id: 3,
      img: "../assets/png.png",
    },
    {
      id: 4,
      img: "../assets/png.png",
    },
    {
      id: 5,
      img: "../assets/png.png",
    },
  ];
  const [showProjects, setShowProjects] = useState([
    ...projects,
    ...projects,
    ...projects,
    ...projects,
    ...projects,
  ]);

  // const {projectNum,setProjectNum} = useGlobalContext()
  //PROJECTS-------
  const [projectNum, setProjectNum] = useState(
    Math.floor(showProjects.length - projects.length)
  );

  const handleRightClick = () => {
    if (projectNum === showProjects.length - 2) {
      if (showProjects.length > projects.length * 10) {
        setProjectNum(projects.length - 1);
      } else {
        setShowProjects([...showProjects, ...projects]);

        setProjectNum(projectNum + 1);
      }
    } else {
      setProjectNum(projectNum + 1);
    }
  };

  //ANIMATIONS
  const [isInTransition, setIsInTransition] = useState(false);
  const handleLeftClick = () => {
    if (projectNum === 2) {
      setProjectNum(showProjects.length - projects.length + 1);
      //
    } else {
      setProjectNum(projectNum - 1);
    }
  };

  //position of the first end of the first section
  const firstPageref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (firstPageref.current) {
      const rect = firstPageref.current.getBoundingClientRect();
      const topRelativeToPage = rect.top + window.scrollY;
      const bottomRelativeToPage = rect.bottom + window.scrollY;
      setPosition({ top: topRelativeToPage, bottom: bottomRelativeToPage });
    }
  }, []);
  //

  //scroll value of the second section

  const targetRef = useRef(null);
  const [doneScrolling, setDoneScrolling] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end ", "start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scalex = useTransform(scrollYProgress, [0, 1], ["40%", "55%"]);
  const scaley = useTransform(scrollYProgress, [0, 1], ["46%", "106%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(scale);
    if (latest > 0) {
      setIsInTransition(true);
    } else {
      setIsInTransition(false);
    }
    if (latest > 0.85) {
      setDoneScrolling(true);
      setIsInTransition(false);
    } else if (latest < 0.9) {
      setDoneScrolling(false);
    }
  });
  const isInView = useInView(targetRef);

  useEffect(() => {}, [isInView]);

  // scroll y value
  const [scrollYValue, setScrollYValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // const windowHeight= window.innerHeight;
      // const documentHeight= document.documentElement.scrollHeight;
      setScrollYValue(window.scrollY);
      // const scrollPercent = (scrollY/(documentHeight-windowHeight))*100
      // setProrgressWidth(scrollPercent)
      //
      //
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" relative w-[100vw]">
      <main ref={firstPageref} className="firstPage ">
        <div className="absolute max-h-[240px] z-50 w-[90%] text-center p-5 gap-2 rounded-lg flex flex-col h-fit bg-[#f5f5f5] sm:tv  overflow-y-auto">
          <img></img>
          <p className="mainTextColor text-[12px]">
            I am a freelance UX/UI designer and full stack software developer. I
            specialize in developing online services from the ground up. From
            ideation to proto-type. Help me get started building your dream
            product!{" "}
          </p>

          <p className="mainTextColor text-[12px]">
            My skills include <span className="font-bold">Figma</span> prototyping, <span className="font-bold">React</span> Front-End dev., <span className="font-bold">Java </span>
            Springboot backend dev.
          </p>
          <button className="btn ">contact me</button>
        </div>

        <motion.div
          style={doneScrolling ? { visibility: "hidden" } : {}}
          initial={{ translateY: 0 }}
          animate={{ translateY: scrollYValue }}
          className="projNavigationContainer "
        >
          <motion.section style={{ y }} className="projectNavigationFluid ">
            <ProjectsCarousel
              scalex={scalex}
              scaley={scaley}
              doneScrolling={doneScrolling}
              isInTransition={isInTransition}
              scrollYValue={y}
              num={projectNum}
              rightClick={handleRightClick}
              classname={`items-end`}
              leftClick={handleLeftClick}
              projects={showProjects}
            />
          </motion.section>

          <motion.section
            style={{ height: scale }}
            className={`projectNavigationBg  ${doneScrolling ? "hidden" : ""} `}
          >
            <div
              className="iconContainer1 "
              onClick={isInTransition ? null : handleLeftClick}
            >
              <FontAwesomeIcon icon={faLeftLong} className="z-20" />
            </div>
            <div
              className="iconContainer2 "
              onClick={isInTransition ? null : handleRightClick}
            >
              <FontAwesomeIcon icon={faRightLong} />
            </div>
          </motion.section>
        </motion.div>
      </main>
      <div ref={targetRef} className=" w-full">
        <div className="page2 ">
          <div
            style={!doneScrolling ? { visibility: "hidden" } : {}}
            className=" projectsContainer2"
          >
            <section className="projectsFluid2 ">
              <div
                className="iconContainer1 "
                onClick={isInTransition ? null : handleLeftClick}
              >
                <FontAwesomeIcon icon={faLeftLong} className="z-20" />
              </div>
              <ProjectsCarousel
                doneScrolling={doneScrolling}
                isInTransition={isInTransition}
                num={projectNum}
                rightClick={handleRightClick}
                classname={`items-center justify-center `}
                leftClick={handleLeftClick}
                projects={showProjects}
              />
              <div
                className="iconContainer2 "
                onClick={isInTransition ? null : handleRightClick}
              >
                <FontAwesomeIcon icon={faRightLong} />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
