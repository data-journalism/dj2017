import React, { PureComponent } from "react";
import EchartsReact from "./EchartsReact";

export default class Chart1 extends PureComponent {
  constructor(props) {
    super(props);
    this.getOption = this.getOption.bind(this);
  }

  getOption() {
    var builderJson = {
      charts: {
        江苏: 8512,
        四川: 5976,
        浙江: 5957,
        山东: 5836,
        陕西: 5338,
        河南: 4964,
        湖南: 4784,
        广东: 4727,
        江西: 3391,
        安徽: 2798,
        河北: 2724,
        湖北: 2671,
        福建: 2545,
        重庆: 2528,
        甘肃: 2317
      },
      components: {
        西藏: 55,
        海南: 104,
        宁夏: 188,
        青海: 247,
        北京: 649,
        新疆: 686,
        吉林: 943,
        天津: 1013,
        内蒙古: 1124,
        辽宁: 1389,
        山西: 1460,
        贵州: 1654,
        广西: 1773,
        云南: 1912,
        黑龙江: 2201,
        上海: 2218
      },
      ie: 2000
    };

    var downloadJson = {
      山东: 393,
      江苏: 317,
      浙江: 275,
      陕西: 274,
      河南: 270,
      四川: 239,
      湖北: 183,
      广东: 177,
      黑龙江: 176,
      安徽: 171,
      其他省份: 1634
    };

    var themeJson = {
      山东: 2474,
      江苏: 1986,
      浙江: 1968,
      广东: 1733,
      陕西: 1183,
      四川: 1161,
      河南: 1133,
      上海: 1094,
      湖北: 988,
      福建: 909,
      其他省份: 8480
    };

    if (typeof window !== `undefined`) {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = canvas.height = 100;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.globalAlpha = 0.08;
      ctx.font = "20px Microsoft Yahei";
      ctx.translate(50, 50);
      ctx.rotate(-Math.PI / 4);
      return {
        backgroundColor: {
          type: "pattern",
          image: canvas,
          repeat: "repeat"
        },
        tooltip: {},
        title: [
          {
            text: "",
            subtext: "",
            x: "center"
          },
          {
            text: "2016年全国各省区博物馆参观人数",
            subtext: "总计：" + 85059 + "（万人）",
            x: "25%",
            textAlign: "center"
          },
          {
            text: "各省文物相关机构数",
            subtext: "总计： " + "4109（个）",
            x: "75%",
            textAlign: "center"
          },
          {
            text: "各省博物馆基本陈列展览数",
            subtext: "总计 " + "23109（个）",
            x: "75%",
            y: "50%",
            textAlign: "center"
          }
        ],
        grid: [
          {
            top: 50,
            width: "50%",
            bottom: "45%",
            left: 10,
            containLabel: true
          },
          {
            top: "55%",
            width: "50%",
            bottom: 0,
            left: 10,
            containLabel: true
          }
        ],
        xAxis: [
          {
            type: "value",
            max: builderJson.all,
            splitLine: {
              show: false
            }
          },
          {
            type: "value",
            max: builderJson.all,
            gridIndex: 1,
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            data: Object.keys(builderJson.charts),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          },
          {
            gridIndex: 1,
            type: "category",
            data: Object.keys(builderJson.components),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            type: "bar",
            stack: "chart",
            z: 3,
            label: {
              normal: {
                position: "right",
                show: true
              }
            },
            data: Object.keys(builderJson.charts).map(function(key) {
              return builderJson.charts[key];
            })
          },
          {
            type: "bar",
            stack: "chart",
            silent: true,
            itemStyle: {
              normal: {
                color: "#eee"
              }
            },
            data: Object.keys(builderJson.charts).map(function(key) {
              return builderJson.all - builderJson.charts[key];
            })
          },
          {
            type: "bar",
            stack: "component",
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            label: {
              normal: {
                position: "right",
                show: true
              }
            },
            data: Object.keys(builderJson.components).map(function(key) {
              return builderJson.components[key];
            })
          },
          {
            type: "bar",
            stack: "component",
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#eee"
              }
            },
            data: Object.keys(builderJson.components).map(function(key) {
              return builderJson.all - builderJson.components[key];
            })
          },
          {
            type: "pie",
            radius: [0, "30%"],
            center: ["75%", "25%"],
            data: Object.keys(downloadJson).map(function(key) {
              return {
                name: key.replace(".js", ""),
                value: downloadJson[key]
              };
            })
          },
          {
            type: "pie",
            radius: [0, "30%"],
            center: ["75%", "75%"],
            data: Object.keys(themeJson).map(function(key) {
              return {
                name: key.replace(".js", ""),
                value: themeJson[key]
              };
            })
          }
        ]
      };
    }



  }

  render() {
    return (
      <div className="parent">
        {/* <label> render a graph-webkit-dep.</label> */}
        <EchartsReact
          option={this.getOption()}
          style={{ height: "600px", width: "100%" }}
          //   className="react_for_echarts"
        />
      </div>
    );
  }
}
