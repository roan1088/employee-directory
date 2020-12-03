import React from "react";
import "./style.css";

function Profile({ profileState }) {
  return (
    <div id="profile">
      <p>Employee Profile:</p>
      {profileState.id ? profileState.id : <p>Click on an employee view their profile</p>}
    </div>
  );
}

export default Profile;