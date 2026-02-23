import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;