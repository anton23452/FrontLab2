import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Имитация загрузки данных пользователя
    const userData = {
      1: { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      2: { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
      3: { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-555-5555' },
    }[id];

    if (userData) {
      setUser(userData);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <button onClick={() => navigate('/users')}>Back to Users</button>
    </div>
  );
}

export default UserDetails;