import './App.css';
import Lead from "./components/lead";
import Header from "./components/header";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
        <div className="App relative z-10">
          <Header></Header>
          <Lead></Lead>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
