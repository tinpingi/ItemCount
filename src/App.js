import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";

const App = () => {
  return (
    <div className="App">
      <Header />

      <ItemCount />
    </div>
  );
};

export default App;
