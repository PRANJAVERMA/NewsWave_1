import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import News from "./News";
import HindiNews from "./HindiNews";
import InternationalNews from "./InternationalNews";

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/news-article2" element={<News />} />
            <Route path="/news-article3" element={<HindiNews />} />
            <Route path="/news-article4" element={<InternationalNews />} />
        </Routes>
      </Router>
  );
}

export default App;