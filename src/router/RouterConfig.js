import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Map from "../components/map/index";
import LoginView from "../pages/Login";
import Footer from "../components/footer";
import MapView from "../pages/Map";

export const RouterConfig = () => {
  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </div>
  );
};
