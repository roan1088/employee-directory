import React from "react";

function DirectorySearch({ updateSearch }) {
  return (
    <form id="directory-form" onSubmit={(e) => e.preventDefault()}>
      <label>Search for Employee:</label>
      <input type="text" placeholder="Enter name" onChange={(e) => updateSearch(e.target.value)} />
    </form>
  );
}

export default DirectorySearch;