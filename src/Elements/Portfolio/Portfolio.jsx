import "./Portfolio.css";

import FirstElement from "./FirstElement";
import SecondElement from "./SecondElement";
import ThirdElement from "./ThirdElement";
import FourthElement from "./FourthElement";
import Header from "./Header";
import Burger from "./Burger";

import { useEffect, useRef, useState } from "react";

import BurgerContextProvider from "../../Contexts/BurgerContext";

import useReveal from "../../Hooks/useReveal";
import Footer from "../Footer";

const PortfolioElement = () => {
  const refs = {
    // create object of refs of elements
    firstRef: useRef(null),
    secondRef: useRef(null),
    thirdRef: useRef(null),
    fourthRef: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("ref1"); // create a state of visible section

  useEffect(() => {
    const handleScroll = () => {
      const rects = {
        // create an object of positions of sections
        firstRect: refs.firstRef.current.getBoundingClientRect(),
        secondRect: refs.secondRef.current.getBoundingClientRect(),
        thirdRect: refs.thirdRef.current.getBoundingClientRect(),
        fourthRect: refs.fourthRef.current.getBoundingClientRect(),
      };

      setActiveSection(
        // set an active section
        rects.fourthRect.top <= 64
          ? "ref4"
          : rects.thirdRect.top <= 64
          ? "ref3"
          : rects.secondRect.top <= 64
          ? "ref2"
          : "ref1"
      );
    };

    window.addEventListener("scroll", handleScroll); // add to a scroll a function which calculate which section is active
    return () => {
      window.removeEventListener("scroll", handleScroll); // clean up
    };
  }, [refs]);

  useEffect(() => {
    window.addEventListener("scroll", useReveal); // add to a scroll a reveal function

    useReveal(); // use a reveal function on start of project

    return () => {
      window.removeEventListener("scroll", useReveal); // clean up
    };
  }, []);

  const scrollToRef = (refId) => {
    // function which scroll to the section with the ref
    const ref = // get a section by a ref
      refId === "ref1"
        ? refs.firstRef
        : refId === "ref2"
        ? refs.secondRef
        : refId === "ref3"
        ? refs.thirdRef
        : refs.fourthRef;
    ref.current.scrollIntoView({
      // scroll to the section by ref
      behavior: "smooth", // scroll is smooth
      block: refId === "ref1" ? "end" : "start", // if section first then scroll to the end of the section. if another than to the start
      inline: "nearest",
    });
  };

  return (
    <BurgerContextProvider>
      <Header
        burger={<Burger />}
        scrollToRef={scrollToRef}
        activeSection={activeSection}
      />
      <main className="portfolio">
        <FirstElement ref={refs.firstRef} />
        <SecondElement ref={refs.secondRef} />
        <ThirdElement ref={refs.thirdRef} />
        <FourthElement ref={refs.fourthRef} />
      </main>
      <Footer />
    </BurgerContextProvider>
  );
};

export default PortfolioElement;
