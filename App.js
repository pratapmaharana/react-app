import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement(
      'div',
      { id: 'parent', key: 'child-div-1' },
      [
        React.createElement('h1', { key: 'h1' }, 'I am child h1!'),
        React.createElement('h2', { key: 'h2' }, 'I am child h2!')
      ]
    ),
    React.createElement('h3', { key: 'h3' }, 'I am child h3!')
  ]
);

console.log(parent);
const heading = React.createElement('h2', { id: "header" }, 'Hello World from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(parent);