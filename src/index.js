import React from 'react';
import ReactDOM from 'react-dom/client';

import Meteo from './components/Meteo';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meteo city="Montivilliers" zipcode="76290" />
    <Meteo city="Troyes" zipcode="10000" />
    <Meteo city="Paris" zipcode="75018" />
    <Meteo city="Aigrefeuille" zipcode="31280" />
  </React.StrictMode>
);

