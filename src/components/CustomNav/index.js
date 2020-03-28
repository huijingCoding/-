import React, { Component } from 'react'
import { Menu } from 'antd';
import {withRouter} from 'react-router-dom'
import { AppstoreOutlined, UserOutlined, ShoppingCartOutlined,BankOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
function handleClick (e) {

  let {path} = e.item.props 
  this.props.history.replace(path)
}
class CustomNav extends Component {
    // rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    constructor(props) {
        super(props);
        // this.state = { 
        //     openKeys: ['sub1'],
        //  };
  }

    // onOpenChange = openKeys => {
    //     const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    //     if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //       this.setState({ openKeys });
    //     } else {
    //       this.setState({
    //         openKeys: latestOpenKey ? [latestOpenKey] : [],
    //       });
    //     }
    //   };
    render() {
        return (
            <Menu
                mode="inline"
                theme='dark'
            // openKeys={this.state.openKeys}
            // onOpenChange={this.onOpenChange}
            onClick={handleClick.bind(this)}
            >
                
                <Menu.Item key="0" path='/admin/manage'><BankOutlined/><span>首页</span></Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <AppstoreOutlined />
                  <span>轮播图管理</span>
                </span>
              }
            >
              <Menu.Item key="5"  path='/admin/bannerList'>轮播图列表</Menu.Item>
              <Menu.Item key="6" path='/admin/bannerAdd'>轮播图添加</Menu.Item>
             
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                 <ShoppingCartOutlined />
                  <span>商品管理</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        );
    }
}

export default withRouter(CustomNav);