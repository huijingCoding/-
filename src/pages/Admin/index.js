import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import CustomNav from '../../components/CustomNav/index'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import style from './index.module.less'
const { Header, Sider, Content } = Layout;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <Layout className={style.wrapper}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
        <CustomNav></CustomNav>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
              <Content className={style.content
              }>
                {this.props.children}
          </Content>
        </Layout>
      </Layout>
        );
    }
}
export default Login;