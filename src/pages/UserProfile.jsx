// pages/UserProfile.js
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Displaying profile of user with ID: {id}</p>
    </div>
  );
}

export default UserProfile;
