import React from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Featured />
      <Gallery />
    </div>
  );
}

export default App;
