import React, { Component } from "react";




class Navigation extends Component{
    render(){
        return(
            <header className="App-header">
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand " href="/">
              
              <span className="badge badge-pill badge-light ml-2">
                {this.props.title}
              </span>
            </a>
          </nav>
          </header>
        )
    }
}

export default Navigation;