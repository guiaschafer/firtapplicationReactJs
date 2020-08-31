import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person'
import classesCss from './App.css';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

const StyledButton = styled.button`  
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
}`;

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: "1", name: 'Gui', age: 28 },
      { id: "2", name: 'Pati', age: 32 },
      { id: "3", name: 'Jose', age: 50 }

    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDeviredStateFromProps(props, state) {
    console.log('[App.js] getDeviredStateFromProps')
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const stateCopy = { ...this.state };
    stateCopy.name = event.target.value
    this.setState({ stateCopy });
  }

  princeChangedHandler = (event, id) => {
    const stateCopy = { ...this.state };
    stateCopy.price = event.target.value
    this.setState({ stateCopy });
  }


  quantityChangedHandler = (event, id) => {
    const stateCopy = { ...this.state };
    stateCopy.quantityChangedHandler = event.target.value
    this.setState({ stateCopy });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
    const test = this.state.authenticated;
    console.log('teste');
  }

  deletePersonHandler = (pIndex) => {
    //const p = this.state.persons.slice();
    const p = [...this.state.persons];
    p.splice(pIndex, 1);
    this.setState({ persons: p });
  }

  render() {
    console.log('[App.js] render')
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null;

    if (this.state.showPersons) {
      persons = (

        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />
        // { {this.state.persons.map((person, index) => {
        //   return <ErrorBoundary key={person.id}><Person
        //     key={person.id}
        //     name={person.name}
        //     age={person.age}
        //     click={() => this.deletePersonHandler(index)}
        //     changed={(event) => this.nameChangedHandler(event, person.id)} />
        //   </ErrorBoundary>
        // })} }

      )
      // style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

    }


    return (
      <div className="App">
        <button onClick={() => { this.setState({ showCockpit: false }) }}> Remove Cockpit </button>
        {/* <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={classesCss.Button}
          onClick={this.togglePersonsHandler}>Switch Name</button> */}
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toogle Persons</StyledButton> */}
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          {this.state.showCockpit ? (
            <Cockpit title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
             />) : null
          }
          {persons}
        </AuthContext.Provider>
      </div>
    );

    // return React.createElement('div', { className: 'App' },
    //    React.createElement('h1', null, 'Hi, Im a ReactApp!!'))

  }
}

export default App; 
