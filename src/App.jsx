import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {createContext} from "react";
import Links from "./pages/Links";
import { getAbout, getLanguages, getPinnedGHRepo } from "./api";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const data = {
    project: getPinnedGHRepo(),
    languages: getLanguages(),
    about: getAbout(),
}



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/links" element={<Links />} />
    </Route>
  )
  );
  
  function App() {
    return (
      <RouterProvider router={router} />
  );
}

export const DataContext = createContext({projectData: data.project, languagesData: data.languages, aboutData: data.about});
export default App;
