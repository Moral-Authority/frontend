import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS_QUERY } from '../graphql/Queries';

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const { loading, data, error } = useQuery(GET_USERS_QUERY);

  useEffect(() => {
    if (data) setUsers(data.users);
    console.log(data);
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default GetUsers;
