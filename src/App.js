import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Person from './Person';
import Validation from './ValidationComponent';
import CharComponent from './CharThing'

class App extends Component {
    state = {
        userInput: '',
    };

    displayLength = (event) => {
        this.setState({userInput: event.target.value})
    };

    deleteThing = (index) => {
        const userInputCopy = [...this.state.userInput];
        userInputCopy.splice(index, 1);
        const updatedText = userInputCopy.join('')
        this.setState({userInput: updatedText});
    }

    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <CharComponent delete={() => this.deleteThing(index)} char={ch}/>;
            }
        );

        console.log(charList);

        return (
            <div>
            <input type='text' onChange={this.displayLength} value={this.state.userInput}/>
            <p>{this.state.userInput}</p>
            <Validation length={this.state.userInput.length} />
            {charList}
            </div>
            );
    };
};

// ORIGINAL APP COMPONENT FOR PERSON PROJECT
//class App extends Component {
//  state = {
//    // single source of truth - can be brought in from outside
//    persons: [
//      {id: 'me', name: 'Nancy', age: 38},
//      {id: 'bff', name: 'Nidhi', age: 35},
//      {id: 'bbff', name: 'Donald', age: 34}],
//    showPersons: false,
//  };
//
//  togglePersonsHandler = () => {
//    const ugh = this.state.showPersons
//    this.setState({showPersons: !ugh})
//    console.log(ugh);
//  }
//
//  nameChangeHandler = (event, id) => {
//    const personIndex = this.state.persons.findIndex(p => {
//        return p.id === id;
//    });
//    console.log('personIndex', personIndex)
//
//    const person = {...this.state.persons[personIndex]};
//    console.log('person object', person);
//
//    person.name = event.target.value;
//
//    const personsCopy = [...this.state.persons];
//    console.log('personCopy', personsCopy)
//
//    personsCopy[personIndex] = person;
//
//    this.setState({persons: personsCopy});
//  }
//
//  deletePersonHandler = (personIndex) => {
//    const persons = this.state.persons.slice();
//    const persons = [...this.state.persons];
//    persons.splice(personIndex, 1);
//    this.setState({persons: persons});
//    console.log(persons);
//  };
//
//  render() {
//    let persons = null;
//
//    if (this.state.showPersons) {
//      persons = (
//        <div>
//            {this.state.persons.map((person, index) => {
//                return <Person name={person.name}
//                               age={person.age}
//                               click={() => this.deletePersonHandler(index)}
//                               key={person.id}
//                               changed={(event) => this.nameChangeHandler(event, person.id)}/>
//            })}
//        </div>
//      )
//    }
//
//    return (
//      <div className="App">
//      <button onClick={this.togglePersonsHandler}>Toggle Names</button>
//      {persons}
//      </div>
//    );
//  }
//}

export default App;
