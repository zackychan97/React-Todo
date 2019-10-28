import React from 'react';




///adding my data like the readme says
const data = [
  {
    task: 'Do the dishes',
    id: 1,
    completed: false
  },
  {
    task: 'Take Catherine on a date!',
    id: 2,
    completed: false
  },
  {
    task: 'Make credit card payment',
    id: 3,
    completed: true
  }
]

class App extends React.Component {
  //adding constructor and super and state
  constructor(){
    super();
    this.state = {
      todo: data
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container-div">
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          task={this.state.todo} />
      </div>
    );
  }
}

export default App;
