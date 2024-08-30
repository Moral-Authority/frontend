import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS_QUERY } from '../graphql/Queries.js';

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const { loading, error, data } = useQuery(GET_USERS_QUERY);

  useEffect(() => {
    if (data) setUsers(data.users);
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default GetUsers;
