import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Methodology from './pages/Methodology';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <Router basename="/cybersecurity">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="methodologie" element={<Methodology />} />
          <Route path="a-propos" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
