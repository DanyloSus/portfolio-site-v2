import React, { useEffect, useState } from "react";

const ScrollBarProgress = () => {
  // create progress bar of scroll
  const [scrollTop, setScrollTop] = useState(0); // create a state which takes a percent of scroll

  const onScroll = () => {
    // create function which update the past state
    const winScroll = document.documentElement.scrollTop; // create the top position of the scroll
    const height =
      document.documentElement.scrollHeight - // take height of the page
      document.documentElement.clientHeight; // subtract height of the visible content

    const scrolled = (winScroll / height) * 100; // calculate the persentage

    setScrollTop(scrolled); // set a scroll percent
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll); // add to a scroll a scroll function which calculate percent of scrolled

    return () => {
      window.removeEventListener("scroll", onScroll); // clean up
    };
  }, []);

  return (
    <div
      style={{
        width: `${scrollTop}%`,
        height: "4px",
        backgroundColor: "#5ED3F3",
      }}
    />
  );
};

export default ScrollBarProgress;
