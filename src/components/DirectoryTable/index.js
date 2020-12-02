import React from "react";
import "./style.css";

function DirectoryTable({ displayState }) {
  return (<table id="directory-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      {displayState.map(employee => <tr>
        <td>{employee.name}</td>
        <td>{employee.role}</td>
        <td>{employee.department}</td>
      </tr>)}
    </tbody>
  </table>);
}

export default DirectoryTable;