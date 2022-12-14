import { FetchTodoAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type TodoAction = FetchTodoAction | DeleteTodoAction;
