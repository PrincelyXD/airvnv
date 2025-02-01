import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/svgs/Logo";
import UserSvg from "../assets/icons/UserSvg";
function Nav() {
  const activeStyle = {
    fontWeight: "bold",
    borderBottom: "3px solid ",
    color: "#161616",
  };
  return (
    <nav className="nav-bar w-full h-[150px] flex justify-between
     items-center px-[35px] bg-[#FFF7ED]">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-x-4 justify-between">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="text-[#4D4D4D] no-underline p-[12px] py-1 
           text-base font-semibold hover:border-b-[2px] border-[#4d4d4d]"
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className=" text-[#4D4D4D] no-underline p-[12px] py-1 
           text-base font-semibold hover:border-b-[2px] border-[#4d4d4d]"
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className=" text-[#4D4D4D] no-underline p-[12px] py-1 ml-1
           text-base font-semibold hover:border-b-[2px] border-[#4d4d4d]"
        >
          Vans
    </NavLink>

    <NavLink
    className="hover:scale-[1.1] transition-transform duration-300"
     style={({ isActive }) => (isActive ? activeStyle : null)}
    to="/login">
     <UserSvg/>
    </NavLink>

      </div>
    </nav>
  );
}

export default Nav;
