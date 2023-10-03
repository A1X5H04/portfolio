import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Social from "./pages/Social"


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/social" element={<Social />} />
  </Route>
)
)


function App() {
  return <RouterProvider router={router} />
}

export default App
