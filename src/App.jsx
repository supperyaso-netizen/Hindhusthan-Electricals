import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Offline from "./pages/Offline";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useSectionTransitions from "./hooks/useSectionTransitions";
import "./styles/styles.css";

export default function App() {
  useSmoothScroll();
  useSectionTransitions();

  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true"></div>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offline" element={<Offline />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
