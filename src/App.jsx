import "./assets/App.css";
import About from "./pages/About.jsx";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./pages/Host/HostLayout";
import HostVans from "./pages/Host/HostVans";
import EditVanDetail from "./pages/Host/EditVanDetail";
import Details from "./pages/Host/outlets/Details";
import Pricing from "./pages/Host/outlets/Pricing";
import Photos from "./pages/Host/outlets/Photos";
// rather than having app render components, app renders routes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id/" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans/>}/>

            <Route path="vans/:id/" element={<EditVanDetail/>}>
              <Route index  element={<Details/>}/>
              <Route path='pricing' element={<Pricing/>}/>
              <Route path='photos' element={<Photos/>}/>
            </Route>

            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
