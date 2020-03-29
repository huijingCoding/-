
import React, { Fragment, Component } from 'react';
import api from '../../api/index.js'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            passWord:''
        };
    }
    login=async ()=>{
        let {userName,passWord} = this.state
        let result = await api.login({userName,passWord})
        console.log(result)
    }
    render() {
        let {userName,passWord} = this.state
        return (
            <Fragment>
                用户名:<input type="text" value={userName}
                onChange ={(e)=>{
                    this.setState({userName:e.target.value})
                }}
                /><br/>
                密码:<input type='password' value={passWord}
                onChange ={(e)=>{
                    this.setState({passWord:e.target.value})
                }}
                /><br/>
                <button onClick={this.login}>登录</button>
            </Fragment>
        );
    }
}

export default Login;