import "./SecondElement.css";

import { forwardRef } from "react";

import Section from "./Section";

const SecondElement = forwardRef(function FirstElement(props, ref) {
  return (
    <Section ref={ref}>
      <div className="reveal leftright">
        <h1>Hi!</h1>
        <p>I am Danylo Sushko. I am Ukrainian and I live in Odesa.</p>
        <p>
          I have one year of experience with React and in that time I have
          created more than 50 projects. I know how to work with: Redux,
          TailwindCSS, MaterialUI, SASS/SCSS, TypeScript etc.
        </p>
        <p>
          Now I have medium level education and I am learning in Odesa Politech.
        </p>
        <p>
          I am looking for a full-time or a part-time job on distance or an
          Odesa's office.
        </p>
        <p>
          I am responsible, hard worker, outgoing, ready to learn some new
          technologies. I know Ukrainian, and English level like{" "}
          <a href="https://www.efset.org/cert/UFJfLz">B1</a>
        </p>
      </div>
      <img
        src="./me.png"
        alt="Danylo Sushko Photo"
        className="meImg reveal leftright"
      />
    </Section>
  );
});

export default SecondElement;
