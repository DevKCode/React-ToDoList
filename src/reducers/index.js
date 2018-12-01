import { combineReducers } from 'redux';
import TaskReducer from './reducer_task';

const rootreducer = combineReducers({
  tasks: TaskReducer
});

export default rootreducer;
