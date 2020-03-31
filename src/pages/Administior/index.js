import React, { Component } from 'react';
import style from './index.module.less'
import {Card,Table,Button,Modal,Input,notification}from 'antd'
import adminapi from '../../api/admin.js'
import { PlusOutlined } from '@ant-design/icons'; 
  const columns = [
    {
      title: 'id', //显示
      dataIndex: '_id',//数据索引字段
      key: '_id', //key值 
    },
    {
      title: '账号',
      dataIndex: 'userName',
      key: 'userName',
    },
  ]

class Admins extends Component {
  state = {
      dataSource:[],
      visible:false
}
handleOk=async()=>{
    let userName = this.refs.us.state.value
    let passWord = this.refs.ps.state.value
    let result =await adminapi.add({userName,passWord})
    if(result.code!==0){return notification.error({description:'管理员添加失败，请重试',message:'错误',duration:2})}
    notification.success({description:'管理员添加成功',message:'成功',duration:2})
    this.setState({visible:false})
    this.refreshList()
}
handleCancel=()=>{   
   this.setState({visible:false})
}
  //刷新列表页面
  refreshList=async()=>{
    let result =await adminapi.List()
      this.setState({dataSource:result.adminList})
  }
  //发起请求渲染界面
  async componentDidMount(){
      this.refreshList()
  }
    render() {
        let {dataSource,visible}= this.state
        return (
            <div className={style.admins}>
               <Card title='管理员列表'>
               <Button type="primary" icon={<PlusOutlined />}
               onClick={()=>{
                  this.setState({visible:true})
               }}>添加</Button>
               <Table dataSource={dataSource} columns={columns} rowKey='_id' />
               </Card>
               <Modal
                 title="管理员添加"
                 visible={visible}
                 onOk={this.handleOk}
                 onCancel={this.handleCancel}>
               <Input placeholder="userName" ref='us'/>
               <Input placeholder="passWord" ref='ps'/>
        </Modal>
            </div>
        );
    }
}

export default Admins;