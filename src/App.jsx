import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Home2 from "./components/Home2";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home2" element={<Home2 />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;