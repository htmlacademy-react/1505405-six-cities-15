import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

const RENT_NUMBER = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentNumber={RENT_NUMBER} />
  </React.StrictMode>
);
