import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import crow from './crow.png';
import TabsWithRoutes from './Tabs/tabs';
import './App.css';

const Home: React.FC = () => {
  useEffect(() => {
    const splash = document.getElementById("splash");
    if (splash) {
      splash.addEventListener("animationend", () => {
        splash.style.display = "none"; // Hide splash after fade-out
      });
    } else {
      console.warn("Splash element not found.");
    }
  }, []);

  return (
    <div className="App">
      <div id="splash">
        <img src={crow} className="crow" alt="logo" />
      </div>
      <div id="main-content" className="main-content">
        <header className="App-header">Ginearosa Carbone - Horror Novelist</header>
        <TabsWithRoutes /> 
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ginearosa-carbone/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
