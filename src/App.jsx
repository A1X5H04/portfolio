import { lazy, Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DataProvider } from "./contexts/DataContext";
const Home = lazy(() => import("./pages/Home"));
import Dashboard from "./pages/Dashboard";
const Links = lazy(() => import("./pages/Links"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <LoadingSpinner
                svgWidth="30"
                svgHeight="30"
                className="h-screen"
              />
            }
          >
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense
            fallback={
              <LoadingSpinner
                svgWidth="30"
                svgHeight="30"
                className="h-screen"
              />
            }
          >
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/links"
        element={
          <Suspense
            fallback={
              <LoadingSpinner
                svgWidth="30"
                svgHeight="30"
                className="h-screen"
              />
            }
          >
            <Links />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
