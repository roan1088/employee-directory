import React from "react";
import "./style.css";

function DirectoryTable({ displayState }) {
  let icon;
  if (displayState.asc) {
    icon = "▲";
  }
  else {
    icon = "▼";
  }
  return (<table id="directory-table">
    <thead>
      <tr>
        <th>Name {displayState.sortBy === "name" ? icon : ""}</th>
        <th>Role {displayState.sortBy === "role" ? icon : ""}</th>
        <th>Department {displayState.sortBy === "department" ? icon : ""}</th>
      </tr>
    </thead>
    <tbody>
      {displayState.employees.map(employee => <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{employee.role}</td>
        <td>{employee.department}</td>
      </tr>)}
    </tbody>
  </table>);
}

export default DirectoryTable;