import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
// outlet allows the layout (parent route) to recognise which child route it currently is at then render appropriately
function Layout() {
  return (
    <div className=" w-[600px] mx-[auto]  min-h-screen h-fit bg-black font-inter">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
