// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Person from './Person/Person'

//  const App = () => {
//   return (
//     <>
//     <nav>
//       <ul className=' bg-red-200'> 
//         <Link to = "/precious" className=' text-purple-500 font-bold'>Precious</Link> <br></br>
//         <Link to = "/precious" className=' text-indigo-500'>Taye</Link>
//       </ul>
//     </nav>

//     <Routes>
//       <Route path="/precious" element = {<Person></Person>}></Route>
//     </Routes>
//     </>
//   )
// }
// export default App

import React, { Component } from "react";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [{ name: "taye" }, { name: "felix" }],
    showPersons: false,
  };
  showdemcamp = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show,
    });
  };
  deleteHandler = (personIndex) => {
    let copy = [...this.state.persons];
    copy.splice(personIndex, 1);
    this.setState({
      persons: copy,
    });
  };
  render() {
    const stylus = {
      backgroundColor: "purple",
      color: "white",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                key={index}
                removal={() => this.deleteHandler(index)}
              ></Person>
            );
          })}
        </div>
      );
      stylus.backgroundColor = "green";
    }
    let classes = [];
    if (this.state.persons.length <= 1) {
      classes.push("purple");
    }
    if (this.state.persons.length === 0) {
      classes.push("bold");
    }
    return (
      <>
        <button onClick={this.showdemcamp} style={stylus}>
          Submit
        </button>
        <p className={classes.join(" ")}>hi there i am a flag</p>
        {persons}
      </>
    );
  }
}
export default App;