import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <div className="px-9">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
