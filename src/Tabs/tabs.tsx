import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './tabs.css';
import Bio from '../Bio/bio';
import Books from '../Books/book-links'; 
import Connect from '../Connect/connect';

const TabsWithRoutes: React.FC = () => {
  return (
    <div>
      <nav className="tab-buttons">
        <NavLink to="" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="books" className={({ isActive }) => (isActive ? 'active' : '')}>Books</NavLink>
        <NavLink to="connect" className={({ isActive }) => (isActive ? 'active' : '')}>Connect</NavLink>
      </nav>

      <div className="tab-content">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="books" element={<Books />} />
          <Route path="connect" element={<Connect />} />
          </Routes>
      </div>
    </div>
  );
};

export default TabsWithRoutes;
