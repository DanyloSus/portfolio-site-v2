import React, { useEffect, useState } from "react";

const ScrollBarProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
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
