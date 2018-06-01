import React, { Component } from 'react';
import './kanban.css';
import Kanban from './kanban-board/containers/kanban-board'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render() {
    return (
      <Kanban/>
    )
  }
}

export default App;
