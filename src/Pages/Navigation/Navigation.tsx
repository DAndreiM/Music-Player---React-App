import classes from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { ChangeEvent } from "react";
import AristListLibrary from "../../Components/Artist/ArtistListLibrary";

type GenreType = { key: string; value: string }[];
type ArtistType = { photo: any; name: string; cat: string }[];

const GENRE: GenreType = [
  { key: "Recents", value: "RECENT" },
  { key: "Recently Added", value: "RECENT_ADD" },
  { key: "Alphabetical", value: "A-Z" },
  { key: "Creator", value: "CREATOR" },
];
const defPhoto = (
  <img
    width="48"
    height="48"
    src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png"
    alt="circled-user-male-skin-type-6--v1"
  />
);
const ARTISTS: ArtistType = [
  {
    photo: defPhoto,
    name: "Eminem",
    cat: "Artist",
  },
  { photo: defPhoto, name: "Doja Cat", cat: "Artist" },
  { photo: defPhoto, name: "Legends Never Die", cat: "Artist" },
];

const Navigation = () => {
  const selectEventHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to={"/"}
            >
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/nolan/64/home-page.png"
                alt="home-page"
              />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to={"/search"}
            >
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/nolan/64/search.png"
                alt="search"
              />{" "}
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.library}>
        <div className={classes.libraryHeader}>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/nolan/64/book-shelf.png"
            alt="book-shelf"
          />
          <h4>Your library</h4>
          <button>+</button>
        </div>
        <div className={classes.searchAndFilter}>
          <button>S</button>
          <select onChange={selectEventHandler} defaultValue="POP">
            {GENRE.map((item) => (
              <option value={item.value} key={item.key}>
                {item.key}
              </option>
            ))}
          </select>
        </div>
        {ARTISTS && <AristListLibrary ARTISTS={ARTISTS} />}
      </div>
    </>
  );
};

export default Navigation;
