
import React, { Fragment, Component } from 'react'
import { Table, Pagination, Button, Card,message,Popconfirm } from 'antd';
import banner from '../../api/banner'
import style from './index.module.less'
let co ='http://47.99.205.206:3000'
class Login extends Component {
    constructor(props) {
        super(props);
      this.state = {
        page:1,//页码数
        pageSize:2,//每页显示的条数
        list:[], //列表数据
        count:0,
        columns: [
          {title: '_id',dataIndex: '_id',key: '_id',width:120,fixed:'left'},
                {
                  title: '名字',
                  dataIndex: 'name',
                 key: 'name',
           
                },
                {
                  title: '详细',
                  dataIndex: 'desc',
                  key: 'desc',
                },
                {
                  title: '图片', dataIndex: 'path', key: 'path',render(path) {return (
                      <img src={co+path} alt="" width ='150' height='80'/>
                    )
                  },
               },
               {title: '操作',key: 'action',fixed:'right',render:(recode)=> {
                 return(
                   <div>
                       <Popconfirm title='你确定要删除该商品嘛?'
                       onConfirm={() => {
                        //  this.delGodds(h._id)
                         console.log(recode)
                         
                       }}
            >
              <Button type='danger' size='small'>删除</Button>
            </Popconfirm>
                   </div>
                 )
               },},
            ],
            
        };
    }
    componentDidMount(){
     this.getListData()
  }
  getListData= async ()=>{
    let {page,pageSize}  = this.state

    let {code,msg,count ,list} = await banner.bannerList(page,pageSize)
    if(code !==0){ return message.error(msg)}
    this.setState({list,count})
  
    console.log(list);
  
  }
    render () {
      let {list,dataSource,columns,count,pageSize,page} = this.state
        return (
          <div className={style.box}>

          <Card title='商品列表' className={style.card}>
             <Button type='primary' onClick={()=>{
               console.log(this)
               this.props.history.push('/admin/bannerAdd')
             }}>商品添加</Button>
              {/* 表格内容 */}
              <Table 
                scroll={ {y:300,x:840} }
                pagination={false}
                columns={columns} 
                dataSource={list} 
                rowKey='_id'>
              </Table>
              {/* 分页器 */}
              <Pagination  current={page}total={count} showQuickJumper pageSize={pageSize}
              onChange={(page,pageSize)=>{
                //只要页码数发生改变就会触发          
                this.setState({page},()=>{
                  this.getListData()
                })   
              }}
              />
          </Card>
        </div>
        );
    }
}

export default Login;