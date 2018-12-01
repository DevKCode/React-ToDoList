import React, { Component } from 'react';
import ListToDo from './components/ListToDo';

import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">To-DO list</h1>
          <Link className="btn btn-outline-primary" to="/todo/add">
            Add +
          </Link>
        </Jumbotron>
        <div>
          <ListToDo />
        </div>
      </div>
    );
  }
}

export default App;
