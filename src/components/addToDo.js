import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { createTask } from '../actions';

class AddToDo extends Component {
  submitFormData() {
    // e.prventDefault();
    console.log('formDataSumbit');
    this.props.createTask({ task: 'adding button' });
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>Task</Label>
            <Input type="text" name="task" placeholder="Enter your task" />
          </FormGroup>
          <Button color="primary" onClick={() => this.submitFormData()}>
            Add Task
          </Button>
          <Link className="btn btn-default" to="/">
            List
          </Link>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { createTask }
)(AddToDo);
