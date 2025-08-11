// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import RestaurantDetail from './components/pages/RestaurantDetail';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
      </Router>
      <Cart />
    </CartProvider>
  );
};

export default App;
