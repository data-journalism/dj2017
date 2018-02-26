window.onload = function () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })    

  var arr = [];
  var eles = document.getElementsByClassName("chart");
  Array.prototype.forEach.call(eles, function (ele) {
    arr.push(ele);
  });

  var mapOption = {
    title: {
      text: '交友网站用户地理分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['人数']
    },
    visualMap: {
      min: 0,
      max: 1500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],           // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: '人数',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data: [
          { name: '安徽', value: 240 },
          { name: '澳门', value: 3 },
          { name: '北京', value: 930 },
          { name: '福建', value: 319 },
          { name: '甘肃', value: 86 },
          { name: '广东', value: 1462 },
          { name: '广西', value: 312 },
          { name: '贵州', value: 101 },
          { name: '海南', value: 57 },
          { name: '河北', value: 356 },
          { name: '河南', value: 383 },
          { name: '黑龙江', value: 216 },
          { name: '湖北', value: 437 },
          { name: '湖南', value: 345 },
          { name: '吉林', value: 199 },
          { name: '江苏', value: 670 },
          { name: '江西', value: 206 },
          { name: '辽宁', value: 429 },
          { name: '内蒙古', value: 112 },
          { name: '宁夏', value: 36 },
          { name: '青海', value: 20 },
          { name: '山东', value: 698 },
          { name: '山西', value: 119 },
          { name: '陕西', value: 321 },
          { name: '上海', value: 574 },
          { name: '四川', value: 367 },
          { name: '台湾', value: 10 },
          { name: '天津', value: 211 },
          { name: '西藏', value: 9 },
          { name: '香港', value: 17 },
          { name: '新疆', value: 114 },
          { name: '云南', value: 124 },
          { name: '浙江', value: 456 },
          { name: '重庆', value: 222 }
        ]
      }
    ]
  };

  var age_data = [];
  var age_male = [
    4,164,232,312,407,479,507,575,549,540,
    458,370,279,277,196,178,169,134,98,111,
    86,92,77,84,39,30,38,36,45,24,14,11,11,
    9,8,5,7,6,8,1,2,2,2,2,2,0,4,2,1,1,1
  ];
  var age_female = [
    9,61,125,134,219,274,283,280,316,289,220,
    159,150,128,79,84,77,62,74,65,60,54,53,41,
    25,29,29,20,32,24,13,12,12,8,12,5,10,7,6,
    4,2,1,0,1,1,0,0,0,0,0
  ];
  for (var i = 26; i < 76; i++) {
    age_data.push(i);
  }

  var ageOption = {
    title: {
        text: '用户性别分布'
    },
    legend: {
        data: ['男性', '女性'],
        align: 'left'
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: age_data,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: '男性',
        type: 'bar',
        color: '#4168b1',
        data: age_male,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: '女性',
        type: 'bar',
        color: '#fb7373',
        data: age_female,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
  };

  var educationOption = {
    title: {
      text: '用户教育程度分布'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['男性', '女性']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['高中中专及以下','大专','本科','双学士','硕士','博士']
        }
    ],
    series : [
        {
            name:'男性',
            type:'bar',
            color:'#4168b1',
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            data:[1424, 2390, 2441, 81, 288, 70]
        },
        {
            name:'女性',
            type:'bar',
            clolr:'#fb7373',
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            data:[718, 1484, 1172, 32, 134, 7]
        }// },
        // {
        //     name:'支出',
        //     type:'bar',
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'left'
        //         }
        //     },
        //     data:[-120, -132, -101, -134, -190, -230, -210]
        // }
    ]
  };

  echarts.init(arr[0]).setOption(mapOption);
  echarts.init(arr[1]).setOption(ageOption);
  echarts.init(arr[2]).setOption(educationOption);

};