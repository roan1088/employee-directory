import React, { useEffect, useState } from "react";
import DirectoryTable from "../DirectoryTable";
import "./style.css";

function Directory({ employees }) {
  const [displayState, setDisplayState] = useState([]);

  useEffect(() => {
    setDisplayState(employees);
  }, [employees]);

  return (<div id="directory">
    <p>Directory Area</p>
    <DirectoryTable displayState={displayState} />
  </div>);
}

export default Directory;