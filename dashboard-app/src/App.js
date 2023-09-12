import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Settings.jsx";
import Reports from "./pages/Reports.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
