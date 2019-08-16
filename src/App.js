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


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textWhenClicked: '',  // Stores current text when user clicks button
//     }
//   }
//   handleClick(text) {
//     this.setState(
//       {textWhenClicked: text},  // Change the current text 
//     )
//   }
//   render() {
//     return ( 
//       <div>
//         <Form currentText='' onClick={(text) => this.handleClick(text)}/>  
//         <h1>{this.state.textWhenClicked}</h1>
//       </div>
//     )
//   }
// }
// const Form = (currentText, onClick) => {
//   return (
//     <div>
//       <input type='text' value={currentText} defaultValue='Enter text here' onChange={onClick} />
//       <button onClick={onClick}>Click</button>
//     </div>
//   )
// }

/* 
  Amits Exercise:
    Text box that displays content when submit button is clicked 
    https://reactjs.org/docs/forms.html
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',   // Changes as user types
      newText: '',       // Changes only when submit is clicked. Copies currentText
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({currentText: event.target.value});
  }
  handleSubmit(event) {
    this.setState({
      currentText: '',                    // Clear the state
      newText: this.state.currentText     // Copy currentText
    });
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/* Textbox will clear when submit is clicked as currentText is cleared in handleSubmit() */}
          <input type='text' value={this.state.currentText} onChange={this.handleChange}/>
        </label>
        <input type='submit' value='Submit'/>
        <h1>{this.state.newText}</h1>
      </form>
    );
  }
}


/* Another version of the above exercise (failed attempt 1) */
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentText: '',
//       finalText:'',
//     }
//   }

//   handleSubmit(text) {
//     this.setState({
//       finalText: text
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.finalText}</h1>
//         <Form onClick={(text) => this.handleSubmit(text)} />
//       </div>
//     )
//   }
// }
// const Form = (onClick) => {
//   return (
//     <div>

//     </div>
//   )
// }

// /* Another version of the above exercise (failed attempt 2) */
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displayText: '',
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(text) {
//     this.setState({
//       displayText: text,
//     });
//   }

//   render() {
//     return <Headline finalText={this.state.displayText} handler={this.handleChange}/>
//   }
// }
// const Headline = ({finalText, handler}) => (
//   <div>
//     <input type='text' defaultValue='Enter text'></input>
//     <button onClick={handler}>Submit</button>
//     <h1>{finalText}</h1>
//   </div>
// );


// /* Component (apprently its not called a CLASS component. Just component. Everything in React is a component) */
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <First/>
//         <Second/>
//       </div>
//     );
//   }
// }
// class First extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Web Development</h1>
//       </div>
//     );
//   }
// }
// class Second extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Mobile Development</h2>
//       </div>
//     );
//   }
// }

export default App; // Will return as a JSX file 

/* ----------------------- Test ----------------------- */
// Following tutorial: https://reactjs.org/docs/introducing-jsx.html

// /* Most basic example */
// function App() {
//   // This is an element (diff from component). The smallest piece of react
//   // Elements describe what you want to see on screen
//   const element = <h1>Hello World!</h1>
//   return element;
// }


// /* Returning a div with children */
// function App() {
//   const element = <h1>Header 1!</h1>
//   return (
//     <div>
//       {element}
//       <h2>This is header 2</h2>
//       <p></p>
//     </div>
//   );
// }


/* 
  Lesson: React elements are immutable. They are like a single frame
  of a movie. The only way to update it is to create a new element and 
  rerender

  Even though a new element is created, only the node that changed is 
  updated by the React DOM
*/


/* 
  Components are like JavaScript functions. They accept arbitrary inputs 
  (called “props”) and return React elements describing what should 
  appear on the screen. 
  The simplest way to define a component is to write a JavaScript function:
*/
// function App(props) {
//   return <h1>Hello {props.name}</h1>
// }


// /* Calling a functional component and passing a prop */
// class App extends React.Component {
//   render() {
//     return <Welcome name='John Doe'/>
//   }
// }
// function Welcome(props) {
//   return <h1>Yo {props.name}</h1>
// }


// /* Calling multiple functional components with diff prop values*/
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Welcome greet='Hello' name='Alex'/>
//         <Welcome greet='Konnichiwa' name='John'/>
//         <Welcome greet='Wassup' name='Barry'/>
//       </div>
//     );
//   }
// }
// function Welcome(props) {
//   return <h1>{props.greet} {props.name}</h1>
// }


// /* Refactor the class below */
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }


// /* Refactoring (Failed attempt) */
// const values = {
//   userInfo : {
//     avatar: {
//       avatarUrl: 'https://www.reddit.com/',
//       name: 'Mr Reddit',
//     }, 
//     name: 'Redditor'
//   },
//   text: 'Lorem impsum on reddit',
//   date: '12-01-2000',
// }
// class App extends React.Component {
//   render() {
//     return (
//       <Comment obj={values}/>
//     );
//   }
// }
// function Comment(props) {
//   // Destructure property
//   const [userInfo, text, date] = props.obj;
//   return (
//     <div>
//       <UserInfo info={userInfo}/>
//       <Text info={text}/>
//       <Date info={date}/>
//     </div>
//   );
// }
// function UserInfo(props) {
//   // Destructure property
//   const [avatarInfo, name] = props.info
//   return (
//     <div>
//       <Avatar val={avatarInfo}/>
//       <h2>Name: {name}</h2>
//     </div>
//   )
// }
// function Text(props) {
//   return <h1>{props.info}</h1>
// }
// function Date(props) {
//   return <h1>{props.date}</h1>
// }
// function Avatar(props) {
//   return (
//     <div>
//       <h3>{props.avatarUrl}</h3>
//       <h3>{props.name}</h3>
//     </div>
//   );
// }


// export default App; // Will return as a JSX file 
