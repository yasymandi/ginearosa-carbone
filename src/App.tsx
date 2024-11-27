import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TabsWithRoutes from './Tabs/tabs';
import './App.css';

const Home: React.FC = () => {
  return (
    <div className="App">
      <div id="main-content" className="main-content">
        <header className="App-header">Ginearosa Carbone</header>
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
