
import React, { Fragment, Component } from 'react'
import style from './index.module.less'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                登录页
                <div className={style.box}></div>
                登录页面
            </Fragment>
        );
    }
}

export default Login;