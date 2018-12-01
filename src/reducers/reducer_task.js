import { CREATE_LIST, LOAD_LIST } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_LIST:
      return state.concat(['data']);

    case LOAD_LIST:
      return state;

    default:
      return state;
  }
}
