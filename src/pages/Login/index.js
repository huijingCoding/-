
import React, { Fragment, Component } from 'react';
import api from '../../api/index.js'
import style from './index.module.less'
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
class Login extends Component {
  onFinish=async (e)=>{
   console.log('完成',e)
  //  获取用户填写的数据 发起ajax请求 
  let {userName,passWord} = e 
  let result = await api.login({userName,passWord})
  console.log(result)
  if(result.code ==0 ){
    message.success('登录成功，将跳转首页',2,()=>{
      this.props.history.replace('/admin')
    })
  }else{
    message.error('用户名密码错误')
  }
  }
  render() { 
    return ( 
      <div className={style["login-box"]}>
       <Form
        name="normal_login"
        className={style["login-form"]}
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
      >
        
        {/* 用户名 */}
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
          {max:9,message:"用户名最长9位"},
          {min:3,message:"用户名最少3位"}
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      {/* 密码 */}
      <Form.Item
        name="passWord"
        rules={[
          {
            required: true,
            message: 'Please input your passWord!',
          },
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password" />
      </Form.Item>
      {/* 记住我 */}
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>
      {/* 登录按钮 */}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        Or <a href="">立即注册</a>
      </Form.Item>
    </Form></div>

     );
  }
}
 
export default Login;