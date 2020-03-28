import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'
import Login from './pages/Login/index'
import Admin from './pages/Admin/index'
import Manage from './pages/manage/index'
<<<<<<< HEAD
import BannerList from './pages/banner/bannerList'
import BannerAdd from './pages/banner/bannerAdd'
=======
import Aminds from './pages/Administior'
>>>>>>> 2a709477e6e47d58eab5459e9e7cf89580a5b523
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
<<<<<<< HEAD
              <Route path='/admin/manage' component={Manage}></Route>
              <Route path='/admin/bannerList' component={BannerList}></Route>
              <Route path='/admin/bannerAdd' component={BannerAdd}></Route>
              
=======
               <Route path='/admin/manage' component={Manage}></Route>
               <Route path='/admin/administior' component={Aminds}></Route>
>>>>>>> 2a709477e6e47d58eab5459e9e7cf89580a5b523
            </Admin>
          )
        }}></Route>
      
      </BrowserRouter>
    );
  }
}

export default App;

