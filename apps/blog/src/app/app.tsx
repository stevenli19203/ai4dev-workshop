import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import ArticlePage from './pages/ArticlePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
};

export default App;
