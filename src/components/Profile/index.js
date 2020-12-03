import React from "react";
import ProfileContent from "../ProfileContent";
import "./style.css";

function Profile({ profileState }) {
  return (
    <div id="profile">
      <p>Employee Profile:</p>
      {profileState.id ? <ProfileContent profileState={profileState} /> : <p>Click on an employee view their profile</p>}
    </div>
  );
}

export default Profile;