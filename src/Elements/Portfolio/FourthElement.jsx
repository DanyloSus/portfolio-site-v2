import { useEffect, useState, forwardRef } from "react";
import Section from "./Section";

import "./FourthElement.css";
import Load from "../Load";
import useReveal from "../../Hooks/useReveal";

const FourthElement = forwardRef(function FourthElement(props, ref) {
  const [isLoading, setIsLoading] = useState(true); // create is loading state
  const [repData, setRepData] = useState([]); // create a data state

  // const getData = () => {
  //   fetch("https://api.github.com/users/DanyloSus/repos?per_page=1000&sort=stars")
  //     .then((respose) => respose.json())
  //     .then((data) => setRepData(data));
  // };

  const getData = async function () {
    // create an async function which fetch data
    const response = await fetch(
      "https://api.github.com/users/DanyloSus/repos?per_page=1000&sort=stars"
    ); // fetch my repositories

    const data = await response.json(); // get a data from response
    setRepData(data); // set data

    setIsLoading(false); // set isn't loading
    useReveal(); // if user in bottom of the site use reveal
  };

  useEffect(() => {
    getData(); // on load of site use fetch
  }, []);

  const repoElements = repData
    .sort((a, b) => b.stargazers_count - a.stargazers_count) // sort elements by hightest of start
    .map((repo) => {
      // create array of repo elements
      return (
        <a href={repo.clone_url} key={repo.name} className="reveal bottom">
          <div className="repoBlock">
            <h3>{repo.name}</h3>
          </div>
        </a>
      );
    });

  return (
    <Section isWrap isScroll ref={ref}>
      <h1 style={{ textAlign: "center" }}>
        My repositories on <a href="https://github.com/DanyloSus">GitHub</a>
      </h1>
      {isLoading ? <Load /> : repoElements}
    </Section>
  );
});

export default FourthElement;
