import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';
import Log from './pages/Log';
import Report from './pages/Report';

function App() {
  const [sidebarState, setSidebarState] = useState(2);

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
        <div className={`w-full p-4 transition-all duration-500 ${sidebarState === 2 ? 'ml-60' : sidebarState === 1 ? 'ml-16' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/log" element={<Log />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
