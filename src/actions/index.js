export const CREATE_LIST = 'create_list';
export const LOAD_LIST = 'load_list';

export function createTask(task) {
  return {
    type: CREATE_LIST,
    payload: task
  };
}

export function loadTask() {
  return {
    type: LOAD_LIST,
    payload: ''
  };
}
