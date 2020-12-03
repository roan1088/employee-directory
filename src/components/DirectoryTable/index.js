import React from "react";
import "./style.css";

function DirectoryTable({ displayState, sortBy, newProfile }) {
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
      {displayState.employees.filter(employee => displayState.search ? employee.name.toLowerCase().includes(displayState.search.toLowerCase()) : true).map(employee => <tr key={employee.id} onClick={() => newProfile(employee.id)}>
        <td>{employee.name}</td>
        <td>{employee.role}</td>
        <td>{employee.department}</td>
      </tr>)}
    </tbody>
  </table>);
}

export default DirectoryTable;