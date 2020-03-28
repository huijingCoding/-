
import React, { Fragment, Component } from 'react'
import { Menu, Dropdown,Avatar  } from 'antd';
import { DownOutlined ,UserOutlined,BankOutlined ,RollbackOutlined} from '@ant-design/icons';
const  menu = (
    <Menu>
        <Menu.Item>
      
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          简体中文
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
      繁体中文
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          英语
        </a>
      </Menu.Item>
    </Menu>
)
const  souye = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        <BankOutlined/> 首页
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        <RollbackOutlined /> 退出
        </a>
      </Menu.Item>
     
    </Menu>
)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
              <Dropdown overlay={souye}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Avatar icon={<UserOutlined />} />
                    </a>         
                </Dropdown>  
                &nbsp;
                &nbsp;
                &nbsp;
                <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              语言 <DownOutlined />
            </a>
            </Dropdown>
                </Fragment>
        );
    }
}

export default Login;