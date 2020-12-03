import React, { useEffect, useState } from "react";
import DirectorySearch from "../DirectorySearch";
import DirectoryTable from "../DirectoryTable";
import "./style.css";

function Directory({ employeeState, newProfile }) {
  const [displayState, setDisplayState] = useState({
    employees: [],
    sortBy: "",
    asc: true,
    search: ""
  });

  useEffect(() => {
    setDisplayState({
      ...displayState,
      employees: employeeState.employees
    });
  }, [employeeState]);

  const sortBy = (col) => {
    if (displayState.sortBy === col) {
      let newDisplay;
      if (displayState.asc) {
        newDisplay = displayState.employees.sort((a, b) => a[col] < b[col] ? 1 : -1);
      }
      else {
        newDisplay = displayState.employees.sort((a, b) => a[col] > b[col] ? 1 : -1);
      }
      setDisplayState({
        ...displayState,
        employees: newDisplay,
        sortBy: col,
        asc: !displayState.asc
      });
    }
    else {
      setDisplayState({
        ...displayState,
        employees: displayState.employees.sort((a, b) => a[col] > b[col] ? 1 : -1),
        sortBy: col,
        asc: true
      });
    }
  }

  const updateSearch = (term) => {
    setDisplayState({
      ...displayState,
      search: term
    });
  }

  return (<div id="directory">
    <DirectorySearch updateSearch={updateSearch} />
    <DirectoryTable displayState={displayState} sortBy={sortBy} newProfile={newProfile} />
  </div>);
}

export default Directory;