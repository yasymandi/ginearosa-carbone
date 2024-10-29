import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import crow from './crow.png';
import Bio from './Bio/bio';
import Books from './Books/book-links';
import './App.css';

const Home: React.FC = () => {
  useEffect(() => {
    const splash = document.getElementById("splash") as HTMLDivElement | null;
    const mainContent = document.getElementById("main-content") as HTMLDivElement | null;

    if (splash && mainContent) {
      splash.addEventListener("animationend", () => {
        splash.style.display = "none"; 
        splash.style.pointerEvents = "none"; // Prevent interaction
        mainContent.style.display = "block"; // Show main content
      });
    } else {
      console.warn("Splash or main content element not found.");
    }

    // Clean up the event listener on component unmount
    return () => {
      if (splash) {
        splash.removeEventListener("animationend", () => {});
      }
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="App">
      <div id="splash">
        <img src={crow} className="crow" alt="logo" />
      </div>
      <div id='main-content' className='main-content' style={{ display: "none" }}>
        <header className="App-header">Ginearosa Carbone - Horror Novelist</header>
        <div className='body'>
          <Bio />
          <Books />
        </div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
