// https://github.com/mbeaudru/modern-js-cheatsheet

import React from 'react';
import { useState } from 'react';
// import React, { Component } from 'react';

// /* A functional component (stateless) */
// function App() {
//   const greeting = 'Hello.. I am a functional component';
//   return <h1>{greeting}</h1>
// }

// /* A Class component */
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello I am from class</h1>
//       </div>
//     );
//   }
// }

// /* App which returns JSX */
// function App() {
//   return <Headline />
// }
// function Headline() {
//   const greeting = 'Im from the headline component!';
//   return <h1>{greeting}</h1>
// }

// /* Passing props around */
// function App() {
//   const greeting = 'Props example';
//   return <Headline value={greeting} />  // Same as Headline(greeting)
// }
// function Headline(props) {
//   return <h1>{props.value}</h1>
// }

// const App = () => {
//   const greeting = 'Arrow function';
//   return <Headline value={greeting} />
// };
// const Headline = ({value}) => {   
//   return <h1>{value}</h1>
// };

// /* Nested function calls */
// const App = () => {
//   const greeting = 'Hello there!';
//   return <Headline value={greeting} />
// };
// const Headline = ({value}) => {   
//   return <Footer value={value}/>
// };
// const Footer = ({value}) => {
//   return <h1>{value}</h1>
// };

// /* Calling 2 functional components together */
// const App = () => {
//   const greeting = 'Greeting';
//   const goodbye = 'Goodbye';
//   return (
//     <div>
//       <Headline value1={greeting} />
//       <Footer value2={goodbye} />
//     </div>
//   ) 
// };
// const Headline = ({value1}) => {   
//   return <h1>{value1}</h1>
// };
// const Footer = ({value2}) => {
//   return <h2>{value2}</h2>
// };

// /* Not a useful example */
// const App = () => {
//   return <Headline />
// };
// const Headline = () => {
//   const greeting = 'state example'
//   return <h1>{greeting}</h1>
// };

// /* 
//  * hooks with useState
//  * https://reactjs.org/docs/hooks-intro.html
//  */
// import { useState } from 'react';
// const App = () => {
//   return <Headline />
// };
// const Headline = () => {
//   const [greeting, setGreeting] = useState('hello');
//   return <h1>{greeting}</h1>
// };

// /* Setting a value on input change */
// const App = () => {
//   return <Headline />
// };
// const Headline = () => {
//   // https://reactjs.org/docs/hooks-overview.html
//   const [greeting, setGreeting] = useState('hello');  // 
//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <input type='text' value={greeting} 
//             onChange={event => setGreeting(event.target.value)}/>
//     </div>
//   )
// };

// /* Same as above example but onChange method is moved outside */
// const App = () => {
//   return <Headline />
// };
// const Headline = () => {
//   const [greeting, setGreeting] = useState('hello');  
//   const handleChange = event => setGreeting(event.target.value);
//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <input type='text' value={greeting} onChange={handleChange}/>
//     </div>
//   )
// };

/* Similar to above but state and handler function moved to calling component*/
// const App = () => {
//   const [greeting, setGreeting] = useState('hello');  
//   const handleChange = event => setGreeting(event.target.value);  // function
//   return (
//     // Pass function and string to Headline constructor
//     <Headline headline={greeting} onChangeHeadline={handleChange} />  
//   );
// };
// const Headline = ({headline, onChangeHeadline}) => (  // Note: () not {} also, no need return keyword 
//     <div>
//       <h1>{headline}</h1>
//       <input type='text' value={headline} onChange={onChangeHeadline}/>
//     </div>
// );

/* Component (apprently its not called a CLASS component. Just component. Everything in React is a component) */
class App extends React.Component {
  render() {
    return (
      <div>
        <First/>
        <Second/>
      </div>
    );
  }
}
class First extends React.Component {
  render() {
    return (
      <div>
        <h1>Web Development</h1>
      </div>
    );
  }
}
class Second extends React.Component {
  render() {
    return (
      <div>
        <h2>Mobile Development</h2>
      </div>
    );
  }
}

export default App; /* Will return as a JSX file */ 