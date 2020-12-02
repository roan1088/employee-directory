import React, { useEffect, useState } from "react";
import DirectoryTable from "../DirectoryTable";
import "./style.css";

function Directory({ employeeState }) {
  const [displayState, setDisplayState] = useState({
    employees: [],
    sortBy: "name",
    asc: true
  });

  useEffect(() => {
    setDisplayState({
      ...displayState,
      employees: employeeState.employees
    });
  }, [employeeState]);

  return (<div id="directory">
    <p>Directory Area</p>
    <DirectoryTable displayState={displayState} />
  </div>);
}

export default Directory;