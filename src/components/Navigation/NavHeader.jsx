import { NavLink } from "react-router-dom";
import css from "./NavHeader.module.css";
import clsx from 'clsx'

const getClassNames = ({isActive})=>{
  return clsx(css.link, isActive&&css.isActive)
 }

const NavHeader = () => {
  return (
    <nav>
      <NavLink className={getClassNames} to="/">
        Home
      </NavLink>
      <NavLink className={getClassNames} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default NavHeader;
