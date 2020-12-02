import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Directory from "./components/Directory";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Directory />        
      </Main>
    </div>
  );
}

export default App;
