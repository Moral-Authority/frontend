import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../graphql/Mutations';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const handleSubmit = e => {
    e.preventDefault();

    createUser({
      variables: {
        name: name,
        age: age,
        address: address,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Name"
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <input
          required
          type="number"
          placeholder="Age"
          onChange={e => {
            setAge(e.target.value);
          }}
        />
        <input
          required
          type="text"
          placeholder="Address"
          onChange={e => {
            setAddress(e.target.value);
          }}
        />
        <button type="submit">Create User</button>
      </form>
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default CreateUser;
