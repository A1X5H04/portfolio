import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Links from "./pages/Links";

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
  const [theme, setTheme] = React.useState("dark");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
