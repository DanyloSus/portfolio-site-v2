import classes from "./Burger.module.css";

const Burger = () => {
  return (
    <div className={classes.burger}>
      <div className="top" />
      <div className="center" />
      <div className="bottom" />
    </div>
  );
};

export default Burger;
