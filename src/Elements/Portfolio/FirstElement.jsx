import Section from "./Section";
import classes from "./FirstElement.module.css";
import { forwardRef } from "react";

const FirstElement = forwardRef(function FirstElement(props, ref) {
  // create an element which take and push to section ref
  return (
    <Section className={classes.firstElement} ref={ref}>
      <a href="https://legacy.reactjs.org/" target="_blank">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className={`${classes.reactLogo} reveal leftright`}
        />
      </a>
      <div className="reveal leftright">
        <h1>React Front-End Developer</h1>
        <p>
          Experienced React Front-End developer with deep understanding of
          creating interactive interfaces. Specialist in React, cross-browser
          layout, relative design and performance optimization for high-end web
          applications. A team player who is committed to building first-rate
          web applications, working closely with designers and other developers.
        </p>
      </div>
    </Section>
  );
});

export default FirstElement;
