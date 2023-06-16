import { Outlet } from "react-router-dom";
import classes from "./Root.module.scss";
import Navigation from "../Navigation/Navigation";

const Root = () => {
  return (
    <div className={classes.root}>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
