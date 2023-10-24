import "./Section.css";

const Section = (props) => {
  return (
    <section className="section">
      <div
        className="content"
        style={{
          flexWrap: props.isWrap ? "wrap" : "nowrap",
          flexDirection: props.isColumn ? "column" : "row",
        }}
      >
        {props.children}
      </div>
      <hr />
    </section>
  );
};

export default Section;
