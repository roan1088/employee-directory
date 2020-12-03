import React from "react";

function ProfileContent({ profileState }) {
  return (
    <div id="profile-content">
      <p>ID: {profileState.id}</p>
      <p>Name: {profileState.name}</p>
      <p>Role: {profileState.role}</p>
      <p>Department: {profileState.department}</p>
      {/* Other infos if any */}
    </div>
  );
}

export default ProfileContent;