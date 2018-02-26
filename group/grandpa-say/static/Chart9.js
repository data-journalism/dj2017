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
            text: '2016年江苏省各地区各级藏品情况',
            subtext: '',
            x:'50%',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            y: '4%',
            data: ['一级品', '二级品','三级品','其他藏品']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['宿迁','镇江','扬州','连云港','泰州','淮安','盐城', '南京', '南通', '徐州', '苏州', '常州', '无锡']
        },
        series: [
            {
                name: '一级品',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [11, 120, 64, 28, 31, 226, 25, 857, 53, 209, 916, 72, 327]
            },
            {
                name: '二级品',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [54, 379, 407, 171, 286, 356, 148, 3079, 648, 513, 1789, 352, 797]
            },
            {
                name: '三级品',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [301, 3505, 1871, 300, 1514, 2081, 473, 51269, 2350, 1391, 35018, 3711, 2140]
            },
            {
                name: '其他藏品',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [5302, 17233, 23153, 27803, 35527, 44081, 57448, 32670, 87445, 159961, 128952, 245468, 351983]
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
