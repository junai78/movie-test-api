import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greet = props => {
  // return <h1>Hello Worlds!</h1>;
  // return <h1>{props.message}</h1>; // First way to extract

  let { message1, message2 } = props;
  return (
    <div>
      <h1>{message1}</h1>
      <p />
      <h2>{message2}</h2>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Welcome to state',
      message: '',
      movies: [
        { title: 'I am Legend' },
        { title: 'Avengers' },
        { title: 'Star Trek' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Greet message1="Hello from component" message2="This is message 2" />
        <label>
          <h3>{this.state.greeting}</h3>
        </label>
        <p />
        <ul>
          {this.state.movies.map(movie => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
