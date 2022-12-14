import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodos(id: number): any;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodos(id);
  };

  onButtonClick = () => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodos })(_App);
