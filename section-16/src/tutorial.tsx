// import React from 'react';
// import ReactDOM from 'react-dom';

/* 
    Все пропсы, которые будут передаваться в компонент, 
    необходимо предварительно описать в интерфейсе.
    Затем используя generic, указать интерфейс.
*/
// interface AppProps {
//   color: string;
// }

/* 
    State в классовых компонентах с TypeScript.
    Класс может принимать два generic-типа.

    P - Props(Interface);
    S - State(Interface);

    На выбор у нас есть два варианта инициализации состояния в компоненте.
    (1). Используя функцию констуктор, но тогда нам нужно предварительно
    создать интерфейс, описать вид нашего состоятия и только тогда присваивать
    значения, свойствами объекта состояния.

    (2). Без функции конструктора. Просто переопределить состояние по умолчанию
    ({}). Указава "state" как свойство и задав ему значение.
*/

// class ClassApp extends React.Component<AppProps> {
//   state = { counter: 0 };

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.counter}</h1>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// const FunctionApp = ({ color }: AppProps): JSX.Element => {
//   return (
//     <div>
//       <button>Increment</button>
//       <button>Decrement</button>
//     </div>
//   );
// };

//ReactDOM.render(<FunctionApp color="red" />, document.getElementById('root'));
export {};
