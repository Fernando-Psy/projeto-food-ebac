import React from 'react';
import Home from './components/pages/Home';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};

export default App;
