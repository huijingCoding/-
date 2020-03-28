import React, { Fragment, Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import {Card }from 'antd'
class Manage extends Component {
    constructor() {
        super();
        this.state = { 
            option :{
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['直接访问', '新增用户', '新增订单', '新增管理员']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '新增用户',
                        type: 'bar',
                        stack: '广告',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '新增订单',
                        type: 'bar',
                        stack: '广告',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '新增管理员',
                        type: 'bar',
                        stack: '广告',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                ]
            }
         };
    }
    render () {
        
        let { option}=this.state
        
        return (
            <Fragment>
                <Card title="数据统计" >
                    <ReactEcharts option={option}></ReactEcharts>
                </Card>
              
            </Fragment>
        );
    }
}

export default Manage;