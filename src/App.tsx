import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import RestaurantDetail from './components/pages/RestaurantDetail';
import Product from './components/pages/Procuct';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/product:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
