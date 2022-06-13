import logo from "../assets/main-logo.svg";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IconContext } from "react-icons";

export const Header = () => {
  return (
    <header className="w-screen  grid grid-cols-2 bg-[#c7f9cc]">
      <picture>
        <Link to = "/">
          <img src={logo} alt="Logo" className="p-10 ml-4 md:max-w-xs" />
        </Link>
      </picture>
      <div className="flex justify-center  items-center md:hidden">
        <IconContext.Provider value={{ size: "1.8rem" }}>
          {<MdOutlineMenu />}
        </IconContext.Provider>
      </div>
      <nav className="hidden md:w-10/12 md:flex md:justify-end md:items-center md:gap-4">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
          className="font-nunito tracking-wider text-sm"
        >
          HOME
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
          className="font-nunito tracking-wider text-sm"
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
          className="font-nunito tracking-wider text-sm"
        >
          SUPPORT US
        </NavLink>
      </nav>
    </header>
  );
};
