import React, { useEffect, useState } from "react";
import DirectoryTable from "../DirectoryTable";
import "./style.css";

function Directory({ employeeState }) {
  const [displayState, setDisplayState] = useState({
    employees: [],
    sortBy: "",
    asc: true
  });

  useEffect(() => {
    setDisplayState({
      ...displayState,
      employees: employeeState.employees
    });
  }, [employeeState]);

  const sortBy = (col) => {
    if (displayState.sortBy === col) {
      if (displayState.asc) {
        setDisplayState({
          ...displayState,
          employees: displayState.employees.sort((a, b) => a[col] < b[col] ? 1 : -1),
          sortBy: col,
          asc: false
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
    else {
      setDisplayState({
        ...displayState,
        employees: displayState.employees.sort((a, b) => a[col] > b[col] ? 1 : -1),
        sortBy: col,
        asc: true
      });
    }
  }

  return (<div id="directory">
    <p>Directory Area</p>
    <DirectoryTable displayState={displayState} sortBy={sortBy} />
  </div>);
}

export default Directory;