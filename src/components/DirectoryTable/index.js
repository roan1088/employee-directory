import React from "react";
import "./style.css";

function DirectoryTable({ displayState, sortBy }) {
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
        <th onClick={() => sortBy("name")}>Name {displayState.sortBy === "name" ? icon : ""}</th>
        <th onClick={() => sortBy("role")}>Role {displayState.sortBy === "role" ? icon : ""}</th>
        <th onClick={() => sortBy("department")}>Department {displayState.sortBy === "department" ? icon : ""}</th>
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