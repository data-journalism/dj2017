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
            text: '各途径来源可移动文物数量',
            subtext: '',
            sublink: 'http://e.weibo.com/1341556070/AjQH99che'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type : 'category',
            splitLine: {show:false},
            data : ['合计','旧藏','发掘','征集购买','移交','接受捐赠', '拨交', '采集', '其他', '拣选', '依法交换']
        },
        yAxis: {
            type : 'value'
        },
        series: [
            {
                name: '辅助',
                type: 'bar',
                stack:  '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [0, 38105390, 27170327, 16681612, 12775574, 8934299, 5496422, 2412599, 1161876, 92536]
            },
            {
                name: '可移动文物数量',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data:[64073178, 25967788, 10935063, 10488715, 3906038, 3841275, 3437877, 3083823, 1250723, 1069340, 92536]
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
          style={{ height: "500px", width: "100%" }}
          //   className="react_for_echarts"
        />
      </div>
    );
  }
}
