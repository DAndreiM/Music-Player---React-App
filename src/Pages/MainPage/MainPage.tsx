import classes from "./MainPage.module.scss";
import MainPageNav from "../Navigation/MainPageNav";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <section className={classes.mainSection}>
      <MainPageNav />
      <Outlet />
    </section>
  );
};

export default Home;
