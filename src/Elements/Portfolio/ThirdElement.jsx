import Event from "./Event";
import "./ThirdElement.css";
import Section from "./Section";
import { useState, forwardRef } from "react";

const eventContent = [
  { title: "Birth", date: "20.05.2005" },
  { title: "Appear of my computer", date: "2008" },
  { title: "Children IT Step", date: "05.09.2015-2019" },
  { title: "First HTML CSS project", date: "03.03.2018" },
  { title: "First JS project", date: "2019" },
  { title: "First Olympiad", date: "2021" },
  { title: "First Cookie Clicker", date: "31.12.2021" },
  { title: "Second Olympiad", date: "2022" },
  { title: "First React Project", date: "17.11.2022" },
  { title: "Third Olympiad", date: "2023" },
  { title: "The End of school", date: "01.09.2023" },
  { title: "Odesa Politech", date: "01.09.2023" },
  { title: "To Be Continue..." },
];

const ThirdElement = forwardRef(function FirstElement(props, ref) {
  const [position, setPosition] = useState(1);

  const eventElements = eventContent.map((event, index) => {
    return (
      <Event
        title={event.title}
        date={event?.date}
        position={index + 1}
        key={index}
      />
    );
  });

  return (
    <Section className="column" ref={ref}>
      <h1>How I became a programmer</h1>
      {eventElements}
    </Section>
  );
});

export default ThirdElement;
