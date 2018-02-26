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
          text: '全国各省、各种类文物数量统计',
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
          data:['北京','陕西','山东','河南','山西', '其他城市']
      },{
          orient: 'vertical',
          x: 'right',
          data:['钱币','古籍图书','档案文书','陶器','瓷器','其他']
      }],
      series: [
          {
              name:'各省可移动文物数量',
              type:'pie',
              center : ['25%', '50%'],
              radius: ['30%', '50%'],
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
              data:[
                  {value:11615758, name:'北京'},
                  {value:7748750, name:'陕西'},
                  {value:5580463, name:'山东'},
                  {value:4783457, name:'河南'},
                  {value:3220550, name:'山西'},
                  {value:31129159, name:'其他城市'}
              ]
          },
          {
              name:'各种类文物数量',
              type:'pie',
              center : ['75%', '50%'],
              radius: ['30%', '50%'],
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
              data:[
                  {value:24827078, name:'钱币'},
                  {value:11912756, name:'古籍图书'},
                  {value:4073555, name:'档案文书'},
                  {value:2287469, name:'陶器'},
                  {value:2252805, name:'瓷器'},
                  {value:18723284, name:'其他'}
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
          style={{ height: "350px", width: "100%" }}
          //   className="react_for_echarts"
        />
      </div>
    );
  }
}
