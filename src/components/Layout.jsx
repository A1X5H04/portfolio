import { Outlet } from "react-router-dom";

import Header from "./Header";

function Layout() {
  return (
    <div className="w-full h-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
