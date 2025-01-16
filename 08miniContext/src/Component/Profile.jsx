import React, { useContext } from "react";
import UserContext from "../Context/userContext.js";
 // Ensure the import name matches your context

function Profile() {
  // Use the context correctly
  const { user } = useContext(UserContext);

  // Check if the user is not logged in
  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.Username}</div>; // Ensure the correct property name
}
export default Profile;