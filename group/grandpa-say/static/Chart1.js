import React, { PureComponent } from "react";
import EchartsReact from "./EchartsReact";

export default class Chart1 extends PureComponent {
  constructor(props) {
    super(props);
    this.getOption = this.getOption.bind(this);
  }

  getOption() {
    // 指定图表的配置项和数据
    var data = [
      [40, 3, 15, 22],
      [37, 4, 13, 20],
      [35, 4, 10, 21],
      [31, 3, 10, 18],
      [30, 3, 10, 17],
      [30, 6, 9, 15],
      [26, 1, 9, 16],
      [26, 4, 8, 14],
      [25, 1, 6, 18],
      [25, 3, 8, 14],
      [25, 6, 6, 13],
      [23, 3, 8, 14],
      [22, 1, 6, 15],
      [19, 1, 11, 7],
      [19, 2, 1, 16],
      [19, 1, 5, 13],
      [18, 1, 5, 12],
      [16, 5, 4, 7],
      [15, 3, 8, 14],
      [15, 1, 4, 10],
      [13, 3, 6, 4],
      [9, 1, 4, 4],
      [9, 2, 1, 6],
      [8, 1, 2, 5],
      [7, 1, 3, 3],
      [6, 0, 1, 5],
      [4, 0, 2, 2],
      [3, 2, 1, 0],
      [3, 2, 0, 1],
      [1, 1, 0, 0],
      [1, 1, 0, 0]
    ];
    var cities = [
      "广东",
      "浙江",
      "山东",
      "河南",
      "湖北",
      "陕西",
      "内蒙古",
      "江苏",
      "安徽",
      "福建",
      "四川",
      "河北",
      "甘肃",
      "山西",
      "江西",
      "广西",
      "黑龙江",
      "北京",
      "湖南",
      "云南",
      "辽宁",
      "吉林",
      "重庆",
      "新疆",
      "上海",
      "青海",
      "贵州",
      "天津",
      "宁夏",
      "海南",
      "西藏"
    ];
    var barHeight = 50;

    return {
      title: {
        text: "全国各省博物馆数目统计",
        subtext: ""
      },
      legend: {
        show: true,
        data: ["价格范围", "均值"]
      },
      grid: {
        top: 100
      },
      angleAxis: {
        type: "category",
        data: cities
      },
      tooltip: {
        show: true,
        formatter: function(params) {
          var id = params.dataIndex;
          return (
            cities[id] +
            "<br>总计：" +
            data[id][0] +
            "<br>一级博物馆：" +
            data[id][1] +
            "<br>二级博物馆：" +
            data[id][2] +
            "<br>三级博物馆：" +
            data[id][3]
          );
        }
      },
      radiusAxis: {},
      polar: {},
      series: [
        {
          type: "bar",
          data: data.map(function(d) {
            return d[0];
          }),
          coordinateSystem: "polar",
          name: "价格范围",
          stack: "最大最小值"
        }
      ],
      legend: {
        show: true,
        data: ["A", "B", "C", "D"]
      }
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
