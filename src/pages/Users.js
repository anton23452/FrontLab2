import { Link } from 'react-router-dom';
import { useState } from 'react';

function Users() {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ]);

  return (
    <div className="users">
      <h1>Users</h1>
      <div className="users-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Link to={`/users/${user.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;