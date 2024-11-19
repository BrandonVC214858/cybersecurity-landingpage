import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/content' &&<ContentPage />}
      {currentPath === '/about' && <AboutUs />}
      {currentPath === '/contact' && <Contact />}
    </>
  );
}

export default App;
