import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App/>
    <Footer />
  </React.StrictMode>
);
