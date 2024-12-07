// Integrating GraphQL with React.js allows you to interact with a 
// GraphQL API in a clean and efficient way, enabling better management 
// of data fetching, caching, and UI updates. Apollo Client is a popular 
// library that helps manage the interaction between React and a GraphQL API.

// Steps to Integrate GraphQL with React:
// 1. Set Up Your React Project
// First, you need to set up a React project. If you haven't already created one, 
// you can use Create React App:

// npx create-react-app graphql-react
// cd graphql-react

// 2. Install Required Dependencies
// You will need to install the Apollo Client library and the GraphQL package for handling 
// GraphQL queries in React.

// Run the following commands to install the necessary dependencies:

// npm install @apollo/client graphql

// This will install:

// @apollo/client: Apollo Client, which helps in interacting with GraphQL APIs.
// graphql: A package to work with GraphQL queries and schema.
// 3. Set Up Apollo Client
// Create a new file to set up the Apollo Client. The Apollo Client will communicate with 
// your GraphQL API server.

// src/apolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql', // Replace with your GraphQL API URL
  cache: new InMemoryCache(), // Used to store the results of queries
});

export { client, ApolloProvider };


// 4. Wrap Your Application with ApolloProvider
// In your src/index.js file, you need to wrap your entire app with the ApolloProvider component. 
// This allows your React components to interact with the Apollo Client instance.

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider, client } from './apolloClient';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


// 5. Fetch Data with useQuery Hook
// Now you can start fetching data from your GraphQL API. The useQuery hook provided by Apollo Client is 
// used to fetch the data.

// Here is an example of fetching a list of items (replace the query with a real GraphQL query 
// from your API).

// src/components/ItemList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Example GraphQL Query to fetch data
const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      description
    }
  }
`;

const ItemList = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>Items</h3>
      <ul>
        {data.items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;


// Explanation:
// GET_ITEMS: A GraphQL query that fetches items (replace this with your own GraphQL schema).
// useQuery: A hook from Apollo Client that executes the query and returns loading, error, and data.
// loading: Boolean that indicates if the query is still in progress.
// error: If there’s any error in the request, it will be captured here.
// data: The result of the query when it's successful.



// 6. Display the Component in the App
// Now, you can use the ItemList component inside your main App component.

// src/App.js
import React from 'react';
import ItemList from './components/ItemList';

export const App = () => {
  return (
    <div className="App">
      <h1>GraphQL with React</h1>
      <ItemList />
    </div>
  );
};


// 7. Mutations in GraphQL (Optional)
// If you need to send data (e.g., creating, updating, or deleting data) to the GraphQL API, 
// you can use the useMutation hook from Apollo Client.

// For example, let’s add a mutation to create a new item:


// src/components/AddItem.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_ITEM = gql`
  mutation AddItem($name: String!, $description: String!) {
    addItem(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addItem] = useMutation(ADD_ITEM);

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem({ variables: { name, description } })
      .then((response) => {
        console.log('Item added:', response.data.addItem);
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });

    setName('');
    setDescription('');
  };

  return (
    <div>
      <h3>Add New Item</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item Description"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};


// Explanation:
// useMutation: A hook used to run a mutation (write operation) on the GraphQL server.
// variables: The mutation can accept variables that you send along with the request. 
// In this case, the item name and description are variables.

// src/App.js
import React from 'react';
// import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

export const Appx = () => {
  return (
    <div className="App">
      <h1>GraphQL with React</h1>
      <AddItem />
      <ItemList />
    </div>
  );
};

// Conclusion:
// You’ve now integrated GraphQL with React using Apollo Client, and you’re able to:

// Fetch data using GraphQL queries.
// Send data to the server using GraphQL mutations.
// Handle loading and error states.
// This setup provides a strong foundation for building more complex applications using GraphQL with React. You can extend it by adding features like pagination, authentication, 
// and other advanced GraphQL operations.

// ---------------

