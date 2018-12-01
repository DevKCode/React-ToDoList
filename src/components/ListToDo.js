import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { loadTask } from '../actions';
class ListToDo extends Component {
  componentDidMount() {
    this.props.loadTask();
  }

  renderTasks() {
    console.log(this.props.tasks);
    return this.props.tasks.map(data => {
      return (
        <ListGroupItem key={Math.random()}>
          {data}
          <Button className="pull-right" color="success">
            Completed
          </Button>
        </ListGroupItem>
      );
    });
  }
  render() {
    return (
      <div>
        <ListGroup>{this.renderTasks()}</ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks };
}
export default connect(
  mapStateToProps,
  { loadTask }
)(ListToDo);
