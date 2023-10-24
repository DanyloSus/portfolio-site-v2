import "./Event.css";

const Event = (props) => {
  return (
    <div
      className="event"
      style={{
        alignSelf:
          (props.position % 4 === 1 && "flex-start") ||
          (props.position % 4 === 3 && "flex-end"),
      }}
    >
      <h2>{props.title}</h2>
      <span>{props.date}</span>
    </div>
  );
};

export default Event;
