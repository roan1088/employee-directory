import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Directory from "./components/Directory";
import * as API from "./util/API";
import Profile from "./components/Profile";

function App() {
  const [employeeState, setEmployeeState] = useState({
    employees: []
  });

  useEffect(() => {
    document.title = "Employee Directory";
    // For demonstration purposes, we mock an API call
    API.getAllEmployees.then(res => {
      setEmployeeState({employees: res});
    })
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <Directory employeeState={employeeState} />        
        <Profile />
      </Main>
    </div>
  );
}

export default App;
