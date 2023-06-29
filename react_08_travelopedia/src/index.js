import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import Footer from "./app/layout/Footer";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import DestinationIndex from "./app/components/DestinationIndex";
import RandomDestination from "./app/components/RandomDestination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <DestinationIndex/>
      <RandomDestination/>
      <Footer />
    </Provider>
  </React.StrictMode>
);
