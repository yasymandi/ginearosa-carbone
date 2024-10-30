import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './tabs.css';
import Bio from '../Bio/bio';
import Books from '../Books/book-links'; 

const TabsWithRoutes: React.FC = () => {
  return (
    <div>
      {/* Navigation Links */}
      <nav className="tab-buttons">
        <NavLink to="/ginearosa-carbone" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="books" className={({ isActive }) => (isActive ? 'active' : '')}>Books</NavLink>
      </nav>

      {/* Routes */}
      <div className="tab-content">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="books" element={<Books />} />
        </Routes>
      </div>
    </div>
  );
};

export default TabsWithRoutes;
