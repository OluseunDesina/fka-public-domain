import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import ContactUs from "./pages/ContactUs/ContactUs";
import Donate from "./pages/Donate/Donate";
import Collections from "./pages/Collections/Collections";
import CollectionDetails from "./components/CollectionDetails/CollectionDetails";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="text-center animate-pulse text-lg mt-10">
            Loading page...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collection-details" element={<CollectionDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
