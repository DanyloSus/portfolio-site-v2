import Section from "./Section";
import "./FirstElement.css";

const FirstElement = () => {
  return (
    <Section className="">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="reactLogo"
      />
      <div>
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
};

export default FirstElement;
