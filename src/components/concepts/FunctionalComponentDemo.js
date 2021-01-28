import React from 'react';
import HelloWorld from './HelloWorld'; 

const FunctionalComponentDemo = () => {
  return (
    <div className='main'>
      <div className="mainDiv">
        <h1>Functional Component</h1>
        <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
      </div>
      <dl className="descList">
        <dt>Can use state</dt>
        <dd>With the 'useState hook, functional components can now both render a display to the page and update the information to be shown.</dd>
        <dt>No 'this' keyword</dt>
        <dd>Older class components use 'this', functional components have no 'this' object.</dd>
        <dt>Can use effects</dt>
        <dd>With the 'useEffect' hook, functional components can perform side effect with any prop or state changes.</dd>
        <dt>return()</dt>
        <dd>Must return a single element, but this element may have nested elements inside.</dd>
      </dl>
      <h1>Functional Syntax vs Fat Arrow Function</h1>
      <HelloWorld />
    </div>
  );
};

export default FunctionalComponentDemo;