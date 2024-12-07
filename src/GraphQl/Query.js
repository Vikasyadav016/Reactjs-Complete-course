// GraphQl Query is used to get data 


/*

A **GraphQL query** is used to request specific data from a server. Unlike REST, where you hit different endpoints for different resources, GraphQL allows you to specify exactly which fields of data you want in a single request, making it more efficient.

Here’s a general structure of a GraphQL query, followed by an example:

### General Structure of a GraphQL Query:

```graphql
{
  queryName {
    field1
    field2
    field3 {
      nestedField1
      nestedField2
    }
  }
}
```

- The curly braces `{}` are used to define the structure of the query.
- The `queryName` is the name of the query (it’s optional in many cases but helps for documentation purposes).
- The fields (like `field1`, `field2`) represent the data you want to fetch.
- You can also nest fields (like `nestedField1`, `nestedField2` under `field3`).

---

### Example of a GraphQL Query:

Let’s say you are fetching data for a list of users with their **name**, **email**, and **posts** (where each post has a title and content). Below is an example GraphQL query to retrieve this data.

#### GraphQL Query Example:
```graphql
{
  users {
    id
    name
    email
    posts {
      title
      content
    }
  }
}
```

### Explanation of the Query:
- The query asks for the list of `users`.
- For each user, it requests:
  - `id`
  - `name`
  - `email`
  - For each `post` (inside the `users` field), it requests:
    - `title`
    - `content`

This means you are fetching a list of users and for each user, you get their `id`, `name`, `email`, and for each user, you also get a list of their posts (with `title` and `content`).

---

### GraphQL Query with Parameters (Variables):

Sometimes, you need to pass parameters to the query to fetch specific data. For example, you might want to fetch the details of a single user by their ID. You can do this by using **variables**.

Here’s an example of a query with a variable:

#### GraphQL Query with Variable Example:
```graphql
query GetUserById($id: ID!) {
  user(id: $id) {
    name
    email
    posts {
      title
      content
    }
  }
}
```

#### Variables:

When you send the query, you will pass the `id` value as a variable:

```json
{
  "id": "12345"
}
```

### Explanation:
- **`$id: ID!`**: This declares a variable `id` of type `ID`. The `!` means that it is **required**.
- The query itself is asking for the `user` with the provided `id` (which will be passed in the variables) and returns the `name`, `email`, and the `posts` for that user.

---

### GraphQL Mutation Example (For Writing Data):

GraphQL also supports **mutations**, which are used to modify data (like creating, updating, or deleting records). Here’s an example of a mutation to create a new user.

#### GraphQL Mutation to Create a User:
```graphql
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
  }
}
```

#### Variables for Mutation:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

### Explanation:
- **`CreateUser`** is the mutation name.
- It accepts two arguments: `name` and `email`, both required (`!`).
- The mutation will return the `id`, `name`, and `email` of the newly created user.

### GraphQL with Apollo Client in React:

If you are integrating the above queries in a React app with Apollo Client, here is an example of how to use the `useQuery` and `useMutation` hooks.

#### 1. **Fetching Data with `useQuery` Hook:**

```javascript
import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define your GraphQL query
const GET_USERS = gql`
  {
    users {
      id
      name
      email
      posts {
        title
        content
      }
    }
  }
`;

const UsersList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <h4>Posts:</h4>
            <ul>
              {user.posts.map((post, index) => (
                <li key={index}>
                  <strong>{post.title}</strong>: {post.content}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
```

#### 2. **Sending Data with `useMutation` Hook:**

```javascript
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createUser({ variables: { name, email } });
      console.log('New user created:', data.createUser);
    } catch (error) {
      console.error('Error creating user:', error);
    }

    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default AddUser;
```

### Conclusion:

- **GraphQL Queries** allow you to retrieve exactly the data you need in a single request.
- **GraphQL Mutations** are used for creating, updating, or deleting data.
- With tools like **Apollo Client**, you can easily integrate GraphQL queries and mutations into your React components using hooks like `useQuery` and `useMutation`.

This setup enables you to interact with GraphQL servers efficiently in your React applications.

*/


