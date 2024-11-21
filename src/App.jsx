import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import NetworkVulnerabilitiesPage from "./pages/NetworkVulnerabilitiesPage";
import HardwareVulnerabilitiesPage from "./pages/HardwareVulnerabilitiesPage";
import SoftwareVulnerabilitiesPage from "./pages/SoftwareVulnerabilitiesPage";
import CyberAttacksPage from "./pages/CyberAttacksPage";
import PhishingPage from "./pages/PhishingPage";
import VulnerabilitiesPage from "./pages/VulnerabilitiesPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vulnerabilidades" element={<VulnerabilitiesPage />} />
        <Route
          path="/vulnerabilidades_red"
          element={<NetworkVulnerabilitiesPage />}
        />
        <Route
          path="/vulnerabilidades_hardware"
          element={<HardwareVulnerabilitiesPage />}
        />
        <Route
          path="/vulnerabilidades_software"
          element={<SoftwareVulnerabilitiesPage />}
        />
        <Route path="/ciberataques" element={<CyberAttacksPage />} />
        <Route path="/phishing" element={<PhishingPage />} />
        <Route path="/fundamentos_seguridad" element={<ContentPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
