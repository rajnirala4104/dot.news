import React from "react";
import "./App.css";
import { Cards } from "./components/Cards";
import Navbar from "./shared/components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
