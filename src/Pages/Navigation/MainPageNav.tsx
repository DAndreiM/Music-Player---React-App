import classes from "./MainPageNav.module.scss";
import ProfileAction from "../../Components/User/ProfileIcon";

const MainPageNav = () => {
  return (
    <nav className={classes.navigation}>
      <button>{"<"}</button>
      <ProfileAction />
    </nav>
  );
};

export default MainPageNav;
