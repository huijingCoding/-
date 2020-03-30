import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login/index'
import Admin from './pages/Admin/index'
import Manage from './pages/manage/index'
import BannerList from './pages/banner/bannerList'
import BannerAdd from './pages/banner/bannerAdd'
import Aminds from './pages/Administior'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <BrowserRouter>
      <Redirect from="/" to="/login"></Redirect>
        <Route path="/login" component={Login}></Route>
        <Route path="/admin" render={() => { 
          return (
            <Admin>
               {/* 路由器 */}
              <Route path='/admin/manage' component={Manage}></Route>
              <Route path='/admin/bannerList' component={BannerList}></Route>
              <Route path='/admin/bannerAdd' component={BannerAdd}></Route>
              
               <Route path='/admin/manage' component={Manage}></Route>
               <Route path='/admin/administior' component={Aminds}></Route>
            </Admin>
          )
        }}></Route>
      
      </BrowserRouter>
    );
  }
}

export default App;

