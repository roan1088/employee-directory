import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Directory from "./components/Directory";
import * as API from "./util/API";

function App() {
  const [employeeState, setEmployeeState] = useState({
    employees: []
  });

  useEffect(() => {
    document.title = "Employee Directory";
    // For demonstration purposes, we mock an API call
    API.getAllEmployees.then(res => {
      setEmployeeState(res);
    })
  }, []);

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
