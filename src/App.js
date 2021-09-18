import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {todo} from './todo.json';
import Navigation from './components/Navigation';

class App extends Component{
  constructor() {
    super();
    this.state={
      title:"Aplication tasks TO DO ",
      cant: todo.length,
      todo
    }
  }

  render(){
    /** crear card  component */
    const todos = this.state.todo.map((todo, i)=>{
      return (
        <div className="col-md-4">
          <div className="card mt-4">
          <div className="card-header">
            <h3>{todo.title} </h3>
              <span className="badge rounded-pill bg-warning text-dark ml-2">
                {todo.priority} 
               </span>
            
          </div>
          <div className="card-body">
            {todo.description}
            <div>
            {todo.responsable}
            </div>
            
          </div>
        </div>
        </div>
      )
    });
    return (
      <div className="App">
        
        <Navigation title={this.state.title + " " + this.state.cant}/>
          <div className="container">
            <div className="row mt-4">
              {todos}
            </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          
        
      </div>
    );


  }




}



export default App;
