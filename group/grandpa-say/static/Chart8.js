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
            text: '2016年江苏省各地区博物馆综合情况',
            subtext: '',
            x: '50%',
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [{
            orient: 'vertical',
            x: 'left',
            data: ['南京', '无锡', '苏州', '常州', '南通', '徐州', '泰州', '镇江', '淮安', '盐城', '连云港', '扬州', '宿迁']
        }],
        series: [
            {
                name: '各市文物相关机构数',
                type: 'pie',
                center: ['42%', '30%'],
                radius: ['20%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 54, name: '南京' },
                    { value: 62, name: '无锡' },
                    { value: 42, name: '苏州' },
                    { value: 27, name: '常州' },
                    { value: 24, name: '南通' },
                    { value: 21, name: '徐州' },
                    { value: 19, name: '泰州' },
                    { value: 14, name: '镇江' },
                    { value: 11, name: '淮安' },
                    { value: 11, name: '盐城' },
                    { value: 10, name: '连云港' },
                    { value: 10, name: '扬州' },
                    { value: 9, name: '宿迁' }
                ]
            }, {
                name: '各市藏品数（件/套）',
                type: 'pie',
                center: ['80%', '30%'],
                radius: ['20%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 355247, name: '南京' },
                    { value: 87875, name: '无锡' },
                    { value: 162074, name: '苏州' },
                    { value: 249603, name: '常州' },
                    { value: 166675, name: '南通' },
                    { value: 90496, name: '徐州' },
                    { value: 28302, name: '泰州' },
                    { value: 46744, name: '镇江' },
                    { value: 58094, name: '淮安' },
                    { value: 25495, name: '盐城' },
                    { value: 21237, name: '连云港' },
                    { value: 37358, name: '扬州' },
                    { value: 5668, name: '宿迁' }
                ]
            }, {
                name: '各市基本陈列数（个）',
                type: 'pie',
                center: ['42%', '80%'],
                radius: ['20%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 102, name: '南京' },
                    { value: 166, name: '无锡' },
                    { value: 143, name: '苏州' },
                    { value: 81, name: '常州' },
                    { value: 86, name: '南通' },
                    { value: 32, name: '徐州' },
                    { value: 42, name: '泰州' },
                    { value: 36, name: '镇江' },
                    { value: 41, name: '淮安' },
                    { value: 50, name: '盐城' },
                    { value: 25, name: '连云港' },
                    { value: 30, name: '扬州' },
                    { value: 10, name: '宿迁' }
                ]
            }, {
                name: '各市博物馆参观人数（万人次）',
                type: 'pie',
                center: ['80%', '80%'],
                radius: ['20%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 2645.51, name: '南京' },
                    { value: 615.16, name: '无锡' },
                    { value: 955.40, name: '苏州' },
                    { value: 372.51, name: '常州' },
                    { value: 393.96, name: '南通' },
                    { value: 619.73, name: '徐州' },
                    { value: 491.89, name: '泰州' },
                    { value: 373.18, name: '镇江' },
                    { value: 605.61, name: '淮安' },
                    { value: 362.73, name: '盐城' },
                    { value: 166.67, name: '连云港' },
                    { value: 201.26, name: '扬州' },
                    { value: 56.95, name: '宿迁' }
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
