import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./components/footer/Footer";
import MenuPage from "./Pages/MenuPage/MenuPage";
import MealDetails from "./Pages/MealDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/menuPage" element={<MenuPage />}></Route>
          <Route path="/meal/:id" element={<MealDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
