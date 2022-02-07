import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { useDispatch } from "react-redux";

// ! функциональный компонент

function App() {
  // ! Dispatchит изменения в redux

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
