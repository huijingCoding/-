import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'
import Login from './pages/Login/index'
import Admin from './pages/Admin/index'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/login" component={Login}></Route>
        <Route path="/admin" render={() => { 
          return (
            <Admin>
               {/* 路由器 */}
              
            </Admin>
          )
        }}></Route>
      
      </BrowserRouter>
    );
  }
}

export default App;

