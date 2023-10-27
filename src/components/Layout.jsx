import { Outlet } from "react-router-dom";
import { getAbout, getLanguages, getPinnedGHRepo } from "../api";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet
        context={{
          projectData: getPinnedGHRepo(),
          languageData: getLanguages(),
          aboutData: getAbout()
        }}
      />
    </>
  );
}

export default Layout;
