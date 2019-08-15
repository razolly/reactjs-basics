import React from 'react';
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

/* Nested function calls */
const App = () => {
  const greeting = 'Hello there!';
  return <Headline value={greeting} />
};
const Headline = ({value}) => {   
  return <Footer value={value}/>
};
const Footer = ({value}) => {
  return <h1>{value}</h1>
};

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

export default App; /* Will return as a JSX file */ 