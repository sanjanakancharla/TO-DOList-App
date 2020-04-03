import React, { Component } from 'react';

import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

  state={
    todos:[
      {id: 1, content: 'Upload the project on the portal'},
      {id: 2, content:'Buy groceries'},
       {id: 3, content:'Do math Homework'},
      {id: 4, content: 'Water the plants'},
      {id: 5, content: 'Attend the RedHat Conference at 4 pm'}
  

    ]
  }

  deleteTodo = (id) => {
const todos = this.state.todos.filter(todos => {
  return todos.id !==id
});
   this.setState({
     todos
   }) 
  }

  addTodo =(todo) => {
todo.id=Math.random();
let todos=[...this.state.todos, todo];
this.setState({
todos
})  

}



  render(){
    return(



      <div className="todo-app container">
<h1 className="center pink-text">TO-DO LIST</h1>
<Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
<AddTodo addTodo={this.addTodo} />

        </div>
    );
  }
}
export default App;
