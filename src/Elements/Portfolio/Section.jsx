import { forwardRef } from "react";
import "./Section.css";

const Section = forwardRef(function Section(props, ref) {
  return (
    <section className={`section ${props.className || ""}`} ref={ref}>
      <div
        className="content"
        style={{
          flexWrap: props.isWrap ? "wrap" : "nowrap",
        }}
      >
        {props.children}
      </div>
      <hr />
    </section>
  );
});

export default Section;
