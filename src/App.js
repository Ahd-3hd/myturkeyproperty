import React from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Featured />
    </div>
  );
}

export default App;
