import React, { useEffect, useState } from "react";
import "./Event.css";

const Event = (props) => {
  // create an event element
  return (
    <div
      className="event reveal bottom"
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
