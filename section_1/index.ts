import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

/* 
    Интерфейсы исользуются для описания структуры объекта.
    Более того, свойства которые будут указаны в интерфейсы
    будут доступны для автозаполнения редактором в дальнейшем.
    Что существенно уменьшает риск ошибиться.
*/

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todoLogger = (id: number, title: string, finished: boolean) => {
  console.log(`
    Todo id is: ${id},
    Todo title is: ${title},
    Is todo finished? ${finished}
    `);
};

axios
  .get(URL, {
    headers: {
      'accept-encoding': null,
    },
  })
  .then((response) => {
    const todo: Todo = response.data;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    todoLogger(id, title, finished);
  });
