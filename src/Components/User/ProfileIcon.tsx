import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileIcon.module.scss";

const NavigationLink = [
  {
    name: "Account",
    Link: "#",
  },
  {
    name: "Profile",
    Link: "#",
  },
  {
    name: "Support",
    Link: "#",
  },
  {
    name: "Download",
    Link: "#",
  },
  {
    name: "Settings",
    Link: "#",
  },
  {
    name: "Logout",
    Link: "#",
  },
];

function ProfileAction() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.dropdown}>
      <Link className={classes.icon} to="#" onClick={toggleDropdown}>
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/nolan/64/gender-neutral-user.png"
          alt="gender-neutral-user"
        />
        {isOpen ? "↑" : "↓"}
      </Link>
      {isOpen && (
        <div className={classes["dropdown-content"]}>
          {NavigationLink.map((item) => (
            <Link key={item.name} to={item.Link}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfileAction;
