import "./assets/App.css";
import About from "./pages/About.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { vanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./pages/Host/HostLayout";
import HostVans, { HostVansLoader } from "./pages/Host/HostVans";
import EditVanDetail, { EditVanDetailLoader } from "./pages/Host/EditVanDetail";
import Details from "./pages/Host/EditVanDetailOutlets/Details";
import Pricing from "./pages/Host/EditVanDetailOutlets/Pricing";
import Photos from "./pages/Host/EditVanDetailOutlets/Photos";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import Error from "./components/Error.jsx";
import Login from "./pages/auth/Login.jsx";
import { requireAuth } from "./utils.jsx";
import ErrorBoundary from "./pages/Host/errors/ErrorBoundary.jsx";

// rather than having app render components, app renders routes

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route
          path="vans"
          element={<Vans />}
          errorElement={<Error />}
          loader={vansLoader}
        />

        <Route
          path="vans/:id/"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />

        <Route
          path="host"
          errorElement={<ErrorBoundary />}
          element={<HostLayout />}
        >
          <Route
            index
            element={<Dashboard />}
            loader={async () => await requireAuth()}
          />

          <Route
            path="income"
            loader={async () => await requireAuth()}
            element={<Income />}
          />

          <Route path="vans" loader={HostVansLoader} element={<HostVans />} />

          <Route
            path="vans/:id/"
            loader={EditVanDetailLoader}
            element={<EditVanDetail />}
          >
            <Route
              index
              loader={async () => await requireAuth()}
              element={<Details />}
            />

            <Route
              path="pricing"
              loader={async () => await requireAuth()}
              element={<Pricing />}
            />

            <Route
              path="photos"
              loader={async () => await requireAuth()}
              element={<Photos />}
            />
          </Route>

          <Route
            path="reviews"
            loader={async () => await requireAuth()}
            element={<Reviews />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
