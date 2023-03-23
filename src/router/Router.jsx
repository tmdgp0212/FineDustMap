import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCities from "../pages/AllCities";
import Favorites from "../pages/Favorites";
import MyCity from "../pages/MyCity";
import Layout from "../components/Layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MyCity />} />
        <Route path="all" element={<AllCities />} />
        <Route path="bookmark" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default Router;
