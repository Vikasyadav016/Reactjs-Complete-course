/*

Webpack is one of the most widely used bundlers in the React ecosystem. 
It takes all the modules and assets of your application and bundles them into static files. 
Webpack has a large plugin ecosystem, which can handle tasks like minification, code splitting, 
transpiling (via Babel), and more.

*/

/*

Webpack in Detail (with React Example)

Webpack is one of the most common bundlers used in React applications. 
It can handle JavaScript, CSS, images, and other assets, but requires some configuration to get started.

Key Webpack Concepts:

Entry: Specifies the entry point of your application (where Webpack starts bundling).

Output: Defines where the bundled files should be placed.

Loaders: Webpack uses loaders to transform files. For example, you can use Babel loader to transpile 
JSX into regular JavaScript.

Plugins: Webpack plugins are used to perform various tasks such as optimizing the bundle, 
cleaning the build folder, or injecting HTML files.

*/

// Example of React Webpack Configuration:

// 1. Install Dependencies
// npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin --save-dev

// 2. Create webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of the app
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel loader to .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Transpile JSX and ES6+
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template to inject the bundled files
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};


// 3. Create a Basic React App

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// 4. Start Development Server

// npx webpack serve

/*

Advanced Concepts in Bundlers
Code Splitting:

Webpack and other bundlers allow splitting the code into multiple bundles. 
This is crucial in large applications where only the code needed for a specific route or 
component should be loaded at the start.
Example:

*/
// In React Router or dynamic imports
const About = React.lazy(() => import('./About'));


/*

Tree Shaking:

Webpack performs tree shaking to remove unused code. 
This is useful in React for eliminating unused components or utility functions, 
reducing the final bundle size.

*/

/*

Service Workers:

Bundlers like Webpack support the generation of service workers to cache assets, 
improving the loading speed in subsequent visits.

*/

/*

Environment Variables:

You can use environment variables (e.g., process.env.NODE_ENV) to define different 
configurations for development and production builds.

Performance Optimization:

Bundlers allow performance optimizations like minification, 
lazy loading, and splitting vendor code from your main application code. 
This can drastically improve the performance of your React app.

*/











































/*

Interview Questions on Bundling and Webpack
Basic Questions:
What is a bundler, and why is it important in a React application?
Can you explain the difference between webpack and parcel?
What is code splitting, and why is it important in a React app?
How does tree shaking work in Webpack?
What is the purpose of HtmlWebpackPlugin in Webpack?
Intermediate Questions:
How would you configure Webpack to handle CSS, images, and fonts in a React app?
Can you explain the difference between entry and output in Webpack?
How can you improve the build performance in Webpack for a large React app?
Explain the concept of Hot Module Replacement (HMR) in Webpack. How does it work in React applications?
What are Webpack loaders and plugins, and how do they differ?
Advanced Questions:
How would you configure Webpack to optimize your React app for production (e.g., minification, cache-busting)?
Explain how to handle dynamic imports and lazy loading of React components in Webpack.
How would you set up Webpack to handle server-side rendering (SSR) in a React app?
Can you explain the difference between development, production, and test builds in Webpack?
Describe the role of Service Workers in Webpack and how they improve performance in React apps.


*/