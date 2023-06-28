import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import Footer from "./app/layout/Footer";
import App from "./App";
import { Provider } from "react-redux";
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>
);
