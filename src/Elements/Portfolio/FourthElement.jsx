import { useEffect, useState } from "react";
import Section from "./Section";

import "./FourthElement.css";

const FourthElement = () => {
  const [repData, setRepData] = useState([]);

  // const getData = () => {
  //   fetch("https://api.github.com/users/DanyloSus/repos?per_page=1000&sort=stars")
  //     .then((respose) => respose.json())
  //     .then((data) => setRepData(data));
  // };

  const getData = async function () {
    const response = await fetch(
      "https://api.github.com/users/DanyloSus/repos?per_page=1000&sort=stars"
    );
    const data = await response.json();
    setRepData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const repoElements = repData
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .map((repo) => {
      return (
        <div className="repoBlock" key={repo.name}>
          <a href={repo.clone_url}>{repo.name}</a>
        </div>
      );
    });

  console.log(repData);

  return (
    <Section isWrap isScroll>
      <h1>
        My repositories on <a href="https://github.com/DanyloSus">GitHub</a>
      </h1>
      {repoElements}
    </Section>
  );
};

export default FourthElement;
