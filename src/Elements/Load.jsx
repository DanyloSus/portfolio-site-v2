import "./Load.css"; // export Load styles

const Load = () => {
  // create a Load element
  return (
    <div className="load">
      {" "}
      {/* block where centred gif */}
      <img src="loader.gif" alt="load gif" /> {/* a gif of loading */}
    </div>
  );
};

export default Load;
