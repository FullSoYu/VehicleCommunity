import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="Modal" element={<Modal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
