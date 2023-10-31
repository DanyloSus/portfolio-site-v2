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

const PortfolioElement = () => {
  const refs = {
    firstRef: useRef(null),
    secondRef: useRef(null),
    thirdRef: useRef(null),
    fourthRef: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("ref1");

  useEffect(() => {
    const handleScroll = () => {
      const rects = {
        firstRect: refs.firstRef.current.getBoundingClientRect(),
        secondRect: refs.secondRef.current.getBoundingClientRect(),
        thirdRect: refs.thirdRef.current.getBoundingClientRect(),
        fourthRect: refs.fourthRef.current.getBoundingClientRect(),
      };

      setActiveSection(
        rects.fourthRect.top <= 64
          ? "ref4"
          : rects.thirdRect.top <= 64
          ? "ref3"
          : rects.secondRect.top <= 64
          ? "ref2"
          : "ref1"
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  useEffect(() => {
    window.addEventListener("scroll", useReveal);

    useReveal();

    return () => {
      window.removeEventListener("scroll", useReveal);
    };
  }, []);

  const scrollToRef = (refId) => {
    const ref =
      refId === "ref1"
        ? refs.firstRef
        : refId === "ref2"
        ? refs.secondRef
        : refId === "ref3"
        ? refs.thirdRef
        : refs.fourthRef;
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: refId === "ref1" ? "end" : "start",
      inline: "nearest",
    });
  };

  return (
    <BurgerContextProvider>
      <main className="portfolio">
        <Header
          burger={<Burger />}
          scrollToRef={scrollToRef}
          activeSection={activeSection}
        />
        <FirstElement ref={refs.firstRef} />
        <SecondElement ref={refs.secondRef} />
        <ThirdElement ref={refs.thirdRef} />
        <FourthElement ref={refs.fourthRef} />
      </main>
    </BurgerContextProvider>
  );
};

export default PortfolioElement;
