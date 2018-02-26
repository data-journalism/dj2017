import React, { PureComponent } from "react";
import EchartsReact from "./EchartsReact";

export default class Chart1 extends PureComponent {
  constructor(props) {
    super(props);
    this.getOption = this.getOption.bind(this);
  }

  getOption() {
    let colors = ['#5793f3', '#d14a61', '#675bba'];
    return {
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        title: {
            text: '2013-2016年江苏省博物馆总体发展情况',
            subtext: '',
            x: '25%',
            textAlign: 'center'
        },
        grid: {
            right: '30%'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['藏品数','基本陈列数','参观人次'],
            x: '50%',
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: ['1月','2月','3月','4月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '藏品数',
                min: 0,
                max: 2000000,
                interval: 200000,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} 个/套'
                }
            },
            {
                type: 'value',
                name: '基本陈列数',
                min: 0,
                max: 1000,
                interval: 100,
                position: 'right',
                offset: 120,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            {
                type: 'value',
                name: '参观人次',
                min: 0,
                max: 10000,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} 万人'
                }
            }
        ],
        series: [
            {
                name:'藏品数',
                type:'bar',
                data:[1665928, 1721406, 1754310, 1767257]
            },
            {
                name:'基本陈列数',
                type:'bar',
                yAxisIndex: 1,
                data:[698, 790, 837, 870]
            },
            {
                name:'参观人次',
                type:'line',
                yAxisIndex: 2,
                data:[6122.41, 7044.37, 7849.64, 8511.60]
            }
        ]
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
