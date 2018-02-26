import React, { PureComponent } from "react";
import EchartsReact from "./EchartsReact";

export default class Chart1 extends PureComponent {
  constructor(props) {
    super(props);
    this.getOption = this.getOption.bind(this);
  }

  getOption() {
    return {
        title: {
            text: '全国各级可移动文物数量及文物保存程度',
            subtext: '',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [{
            orient: 'vertical',
            x: 'left', y:'10%',
            data:['一级','二级','三级','一般','未定级']
        },{
            orient: 'vertical',
            x: 'right', y:'10%',
            data:['不需修复','需要修复','急需修复','已修复']
        },{
            orient: 'vertical',
            x: 'center', y:'10%',
            data:['完整','基本完整','残缺','严重残缺']
        }],
        series: [
            {
                name:'各级别可移动文物数量',
                type:'pie',
                center : ['20%', '50%'],
                radius: ['20%', '33%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:218911, name:'一级'},
                    {value:551192, name:'二级'},
                    {value:3086165, name:'三级'},
                    {value:24353746, name:'一般'},
                    {value:35863164, name:'未定级'}
                ]
            },
            {
                name:'可移动文物保存状态',
                type:'pie',
                center : ['80%', '50%'],
                radius: ['20%', '33%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:37515953, name:'不需修复'},
                    {value:23222812, name:'需要修复'},
                    {value:1134956, name:'急需修复'},
                    {value:684776, name:'已修复'}
                ]
            },
            {
                name:'可移动文物完残程度',
                type:'pie',
                center : ['50%', '50%'],
                radius: ['20%', '33%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:14970248, name:'完整'},
                    {value:37466284, name:'基本完整'},
                    {value:9027191, name:'残缺'},
                    {value:1094774, name:'严重残缺'}
                ]
            }
        ],
    };
  }

  render() {
    return (
      <div className="parent">
        {/* <label> render a graph-webkit-dep.</label> */}
        <EchartsReact
          option={this.getOption()}
          style={{ height: "400px", width: "100%" }}
          //   className="react_for_echarts"
        />
      </div>
    );
  }
}
