import "./App.css";

// Package imports
import { Routes, Route } from "react-router-dom";

// Component import

import Navbar from "./components/Navbar";

import ProductDetail from "./pages/ProductDetail";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/product/detail" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
