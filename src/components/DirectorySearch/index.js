import React from "react";

function DirectorySearch() {
  return (
    <form id="directory-form" onSubmit={(e) => e.preventDefault()}>
      <label>Search for Employee:</label>
      <input type="text" placeholder="Enter name" />
    </form>
  );
}

export default DirectorySearch;