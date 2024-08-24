import { Outlet, NavLink } from "react-router-dom";

function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    color: "#161616",
    backgroundColor: "#FFEAD0",
    borderRadius: "5px",
  };

  return (
    <div className=" px-9 bg-body-cream">
      <div className=" w-[60%]  text-[#4D4D4D] py-[12px] text-[17px] font-semibold">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
          end
          className="py-[10px] px-[15px] hover:text-chinese-black"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="income"
          className="py-[10px] px-[15px]  hover:text-chinese-black"
        >
          Income
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="vans"
          className="py-[12px] px-[15px]  hover:text-chinese-black"
        >
          Vans
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="reviews"
          className="py-[12px] px-[15px]  hover:text-chinese-black"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default HostLayout;
