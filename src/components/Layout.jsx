import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
        <Header />
        <div className="px-8">
        <Outlet />
        </div>
    </>
  );
}

export default Layout;
