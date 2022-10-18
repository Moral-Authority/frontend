# How to Create and Consume GraphQL APIs

In this guide, I'll show you how to create and consume GraphQL APIs.

## Defining Schema

Our GraphQL server uses a schema to describe the shape of your available data. This schema defines a hierarchy of types with fields that are populated from your back-end data stores. The schema also specifies exactly which queries and mutations are available for clients to execute.

For example, If we want to store a `user`.
We have to define the schema in our `back-end` like so:

```
type User {
  id: Int!
  name: String!
  createdAt: String!
  age: Int!
  address: String!
}

type Query {
  users: [User!]!
  user(input: Int!): User!
}

input NewUser {
  name: String!
  age: Int!
  address: String!
}

type Mutation {
  createUser(input: NewUser!): User!
  updateUser(id: Int!, input: NewUser!): User!
  deleteUser(id: Int!): User!
}
```

## Defining a Resolver

After that, you'll have to create resolvers to handle these requests. A Resolver is a function where you do the work like fetching data from a `database`, manipulating it, and sending it over to your front-end.

For example, if we want to create a resolver for the `user` query we defined earlier in our schema, we would do something like this.

```js
const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      return users.find(user => user.id === args.input);
    },
  },
};
```

## Fetch Data with `useQuery`

Now the backend part is ended, you have created an API endpoint. So now we'll move on to how to fetch the data from this API.

Next, let's define a component named `GetUsers` that executes our `GET_USERS_QUERY` with the `useQuery` hook:

Whenever this component renders, the `useQuery` hook automatically executes our query and returns a result object containing loading, error, and data properties:

Apollo Client automatically tracks a query's loading and error states, which are reflected in the loading and error properties. When the result of your query comes back, it's attached to the data property.

Create a new file called `Queries.js` in the `src/graphql` directory and add the following code:

```js
import { gql } from '@apollo/client';

const GET_USERS_QUERY = gql`
  query Users {
    users {
      id
      name
      createdAt
      age
      address
    }
  }
`;

const GET_USER_QUERY = gql`
  query User($input: Int!) {
    user(input: $input) {
      id
      name
      createdAt
      age
      address
    }
  }
`;

export { GET_USERS_QUERY, GET_USER_QUERY };
```

Next, let’s implement the component that renders a list of users.

Go to the `src/components` directory, and create a new file called `GetUsers.js`. Then add the following code:

```js
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS_QUERY } from '../graphql/Queries';

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
```

Or, if you want to get a single user.

```js
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_QUERY } from '../graphql/Queries';

const GetUser = () => {
  const [user, setUser] = useState([]);
  const { loading, error, data } = useQuery(GET_USER_QUERY);

  useEffect(() => {
    if (data) setUser(data.user);
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <p key={user.id}>{user.name}</p>
    </div>
  );
};

export default GetUser;
```

## Mutations in Apollo Client

Now if we want to modify our data, we'll use `useMutation` hook for that.

Create a new file in the `src/graphql` directory and call it `Mutations.js`. Then paste the following code into it:

```js
import { gql } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($name: String!, $age: Int!, $address: String!) {
    createUser(input: { name: $name, age: $age, address: $address }) {
      id
      name
      createdAt
      age
      address
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser(
    $id: Int!
    $name: String!
    $age: Int!
    $address: String!
  ) {
    updateUser(id: $id, input: { name: $name, age: $age, address: $address }) {
      id
      name
      createdAt
      age
      address
    }
  }
`;

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
      name
      createdAt
      age
      address
    }
  }
`;

export { CREATE_USER_MUTATION };
```

Now let's say we want to create a new user. so what we'll do is:
Create a new file in the `src/components` directory and call it `CreateUser.js`. Then paste the following code into it:

```js
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../graphql/Mutations';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const [createUser, { loading, error, data }] =
    useMutation(CREATE_USER_MUTATION);

  const handleSubmit = e => {
    e.preventDefault();

    createUser({
      variables: {
        name: name,
        age: Number(age),
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
      <h2>Newly Added User</h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <p>{data.createUser.name}</p>}
    </div>
  );
};

export default CreateUser;
```

And for updating the user:

```js
import { UPDATE_USER_MUTATION } from '../graphql/Mutations';

const [updateUser, { loading, error, data }] =
  useMutation(UPDATE_USER_MUTATION);

updateUser({
  variables: {
    id: id,
    name: name,
    age: Number(age),
    address: address,
  },
});
```

Now, to delete a user we'll just have to provide the current user `id` as an argument.

```js
import { DELETE_USER_MUTATION } from '../graphql/Mutations';

const [deleteUser, { loading, error, data }] =
  useMutation(DELETE_USER_MUTATION);

deleteUser({
  variables: {
    id: id,
  },
});
```
