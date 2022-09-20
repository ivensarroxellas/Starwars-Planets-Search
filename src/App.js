import React from 'react';
import './App.css';
import Tabela from './components/Tabela';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Tabela />
    </Provider>
  );
}

export default App;
