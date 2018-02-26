/*tab 1*/
var dom = document.getElementById("pie0");
var myChart = echarts.init(dom);
var app = {};
option = null;
var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function(map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 10000
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function() {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 15,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e', '#999', '#123', '#895', '#378', '#530', '#238', '#155', '#588', '#234', '#384'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['南京', '苏州', '昆山', '南通', '扬州', '无锡', '常州', '泰州', '镇江', '徐州', '盐城', '连云港', '淮安', '沭阳', '宿迁']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        axisTick: { show: false },
        data: ['2011', '2012', '2013', '2014', '2015', '2016']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '南京',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [14442, 14750, 17313, 18099, 18697, 24867]
        },
        {
            name: '苏州',
            type: 'bar',
            label: labelOption,
            data: [10000, 10089, 10941, 10980, 12251, 16181]
        },
        {
            name: '昆山',
            type: 'bar',
            label: labelOption,
            data: [7153, 7075, 7467, 7128, 7488, 10706]
        },
        {
            name: '南通',
            type: 'bar',
            label: labelOption,
            data: [9986, 9408, 8218, , 8308, 8716]
        },
        {
            name: '扬州',
            type: 'bar',
            label: labelOption,
            data: [8275, 8366, 8150, , 8406, 8579]
        },
        {
            name: '无锡',
            type: 'bar',
            label: labelOption,
            data: [7477, 7336, 7312, 6979, 6771, 8300]
        },
        {
            name: '常州',
            type: 'bar',
            label: labelOption,
            data: [7638, 5536, 6222, 7324, 6560, 8202]
        },
        {
            name: '泰州',
            type: 'bar',
            label: labelOption,
            data: [7777, 7975, 7838, , 4651, 7285]
        },
        {
            name: '镇江',
            type: 'bar',
            label: labelOption,
            data: [6860, 6578, 6663, , 7304, 7240]
        },
        {
            name: '徐州',
            type: 'bar',
            label: labelOption,
            data: [7477, 7336, 7312, 6979, 6771, 8300]
        },
        {
            name: '盐城',
            type: 'bar',
            label: labelOption,
            data: [, , , , 6514, 6607]
        },
        {
            name: '连云港',
            type: 'bar',
            label: labelOption,
            data: [, , , , 5964, 6458]
        },
        {
            name: '淮安',
            type: 'bar',
            label: labelOption,
            data: [, , , , 5580, 5740]
        },
        {
            name: '沭阳',
            type: 'bar',
            label: labelOption,
            data: [, , , 5500, 5500]
        },
        {
            name: '宿迁',
            type: 'bar',
            label: labelOption,
            data: [, , , , 4905, 5085]
        },
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
/*tab 2*/
var options = [
    //常州
    {
        title: {
            text: '2017.2-2018.1 常州市房价',
            subtext: '常州房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['武进区','钟楼区','天宁区','新北区' ,'金坛市','溧阳市'  ],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'武进区',
                type:'line',
                data:[6629, 6629, 6629, 6629, 6629, 6629, 8717, 9054, 9054, 9134, 9144, 10446],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'钟楼区',
                type:'line',
                data:[8009, 8009, 8009, 8009, 8009, 8009, 11296, 11909, 11948, 11949, 11954, 13833],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'天宁区',
                type:'line',
                data:[8733, 8733, 8733, 8733, 8733, 8733, 12493, 12551, 12537, 12686, 12293, 12940],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'新北区',
                type:'line',
                data:[6860, 6860, 6860, 6860, 6931, 6931, 9270, 9434, 9434, 9525, 9597, 11604],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'金坛市',
                type:'line',
                data:[4833, 4833, 4833, 4833, 5333, 5333, 6750, 6750,9500, 9525, 9525, 10060],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'溧阳市',
                type:'line',
                data:[7798, 7798, 7798, 7798, 7798, 7798, 7697, 7697, 7697, 7697, 7697, 7200],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            
        ]
    },
    //淮安
    {
        title: {
            text: '2017.2-2018.1 淮安市房价',
            subtext: '淮安房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['清河区','清浦区','淮阴区','涟水县','盱眙县','洪泽县','金湖县'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'清河区',
                type:'line',
                data:[8052, 8656, 8696, 9003, 9053, 9284, 9445, 9451, 9357, 9615, 9786, 9920],
                     markPoint: {
                         data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'青浦区',
                type:'line',
                data:[7109, 7372, 7494, 7682, 7929, 7912, 7872, 7932, 8049, 8251, 8396, 8385],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'淮阴区',
                type:'line',
                data:[6561, 6804, 6988, 7138, 7307, 7328, 7363, 7434, 7540, 7767, 7966, 8018],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'涟水县',
                type:'line',
                data:[4667, 4693, 4891, 4878, 4871, 5042, 5168, 5158, 5187, 5315, 5389, 5451],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'盱眙县',
                type:'line',
                data:[4867, 4778, 5154, 5227, 5652, 5292, 5240, 5379, 5569, 5793, 5966, 5979],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'洪泽县',
                type:'line',
                data:[5020, 5268, 5566, 5637, 5656, 5634, 5599, 5710, 5796, 5971, 6057, 6356],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'金湖县',
                type:'line',
                data:[6350, 6350, 6127, 5959, 6666, 6356, 7545, 9697, 8051, 7425, 7849, 6633],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
        ]
    },
    //连云港
    {
        title: {
            text: '2017.2-2018.1 连云港市房价',
            subtext: '连云港房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['连云区','海州区','赣榆区','东海县','灌云县','灌南县' ,'新浦区'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'连云区',
                type:'line',
                data:[5165, 5509, 5645, 6017, 6307, 6627, 6523, 6595, 6829, 7080, 7233, 7096],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'海州区',
                type:'line',
                data:[6838, 7506, 7742, 8628, 9260, 9372, 9836, 10035, 10260, 10376, 10377, 10267],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'新浦区',
                type:'line',
                data:[7700, 8032, 8478, 9350, 9776, 9927, 10085, 10203, 10244, 10591, 10646, 10720],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'东海县',
                type:'line',
                data:[7127, 6454, 6937, 7254, 7986, 8356, 9790, 8933, 8231, 8092, 8171, 8106],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'赣榆区',
                type:'line',
                data:[4875, 5185, 5276, 5538, 5885, 6352, 6389, 6483, 6576, 6675, 6665, 6682],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'灌云县',
                type:'line',
                data:[5937, 5710, 6328, 6578, 6572, 7227, 6574, 6468, 6317, 6230, 6377, 6382],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'灌南县',
                type:'line',
                data:[4737, 4688, 4806, 4813, 4650, 4543, 4817, 5006, 5012, 5014, 5065, 5079],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            
        ]
    },
    //南京
    {
        title: {
            text: '2017.2-2018.1 南京市房价',
            subtext: '南京房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['江宁区','浦口区', '栖霞区', '建邺区', '雨花台区', '六合区', '鼓楼区', '玄武区', '秦淮区', '溧水市', 
            '高淳市']
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'江宁区',
                type:'line',
                data:[19255, 20555, 13745, 20152, 24158, 23574, 23987, 23936, 24231, 24383, 23926, 23961 ],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'浦口区',
                type:'line',
                data:[25017, 25891, 29516, 28989, 24351, 24413, 23123, 24044, 24374, 24334, 24389, 23304],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'栖霞区',
                type:'line',
                data:[29097, 28573, 24182, 28068, 29691, 29739, 30207, 30207, 29559, 30775, 29629, 30303  ],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'建邺区',
                type:'line',
                data:[28742, 27525, 37761, 38593, , , , , ,44998],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'雨花台区',
                type:'line',
                data:[27172, 34945, 23218, 40856, 29833, 27500, 28500, 31000, 31000, 22000, 22000, 22000],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'六合区',
                type:'line',
                data:[10393, 10949, 12944, 16978, 12536, 11993, 12246, 12718, 12718, 12271, 12566, 12431],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'鼓楼区',
                type:'line',
                data:[31720, 40732, 37077, 41247, 36670, 36620, 36620, 36080, 36133, 40600, 39024, 39024],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'玄武区',
                type:'line',
                data:[31139, 31133, 44761, 56812, 29300, 28000, 26800, 26800, 26800, 26800, 28900, 28900],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'秦淮区',
                type:'line',
                data:[32162, 32911, 34281, 34291, 35136, 35308, 35308, 35308, 35308, 35136, 33886, 33886],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'溧水市',
                type:'line',
                data:[16347, 15699, 6608, 8944, 11500, ,11000, 8670, 8670, 10472, 11417, 11200],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'高淳市',
                type:'line',
                data:[6805, 7031, 9363, 8851, 7625, 8575, 9657, 9574, 8618, 8011, 8214, 8324],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
        ]
    },
    //南通
    {
        title: {
            text: '2017.2-2018.1 南通市房价',
            subtext: '南通房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['崇川区','港闸区','如皋市','通州市','海门市','启东市','海安县','如东县'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'崇川区',
                type:'line',
                data:[10355, 10896, 11383, 12107, 12192, 12205, 12776, 13096, 13256, 12801, 12594, 12817],
                     markPoint: {
                         data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'港闸区',
                type:'line',
                data:[8681, 9202, 9508, 10044, 10515, 10058, 10447, 10185, 9631, 9956, 10313, 10305],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'通州市',
                type:'line',
                data:[7181, 7440, 7504, 7869, 8061, 8301, 8627, 8582, 8436, 8627, 8582, 8436, 8627, 8629, 8489],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'海门市',
                type:'line',
                data:[6840, 7306, 7265, 7224, 7467, 7808, 7933, 7940, 8089, 8736, 8723, 9041],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'启东市',
                type:'line',
                data:[8154, 9541, 9909, 9219, 10368, 8637, 8254, 8421, 9668, 12181, 12868, 13493],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'海安县',
                type:'line',
                data:[4636, 4853, 5016, 5667, 6251, 6417, 6406, 6478, 6527, 6624, 6697, 6853],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'如东县',
                type:'line',
                data:[7962, 6115, 5918, 7210, 5705, 5457, 5881, 5862, 5840, 5871, 7781, 8548],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            
        ]
    },
    //苏州
    {
        title: {
            text: '2017.2-2018.1 苏州市房价',
            subtext: '苏州房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['虎丘区','吴中区','相城区','张家港市','常熟市','太仓市','吴江市'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'吴中区',
                type:'line',
                data:[16259, 16027, 15370, 15076, 14761, 14456, 14443, 14597, 15526, 16085, 15975, 16030],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'相城区',
                type:'line',
                data:[13433, 13288, 12649, 12691, 12709, 12910, 13074, 13133, 13054, 13168, 13454, 13601],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'吴江市',
                type:'line',
                data:[11251, 11472, 11288, 11114, 10971, 10984, 10918, 10987, 11028, 11040, 11002, 11100],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'常熟市',
                type:'line',
                data:[13531, 13643, 14487, 15113, 15257, 15292, 15279, 15187, 15449, 15814, 16101, 16009],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'张家港市',
                type:'line',
                data:[8280, 8178, 8071, 8079, 8308, 8281, 8314, 8465, 8497, 8501, 8575, 8632],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'虎丘区',
                type:'line',
                data:[,,,,,,,,18023, 18927, 18989, 19088],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'太仓市',
                type:'line',
                data:[8111, 8115, 8146, 8276, 8734, 9052, 9082, 9140, 9449, 9697, 9915, 10000],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            
        ]
    },
    //泰州
    {
        title: {
            text: '2017.2-2018.1 泰州市房价',
            subtext: '泰州房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['高港区','兴化市','姜堰市','泰兴市','靖江市'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'高港区',
                type:'line',
                data:[5863,5957,5753,5185,5895,7525,7862,6432,5908,6430,6667,6834],
                     markPoint: {
                         data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'兴化市',
                type:'line',
                data:[5742, 5742, 5742, 5742, 5742, 5742, 5716, 5691, 5691, 5691, 5792, 5730],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'姜堰市',
                type:'line',
                data:[5770, 5968, 6045, 6245, 6535, 6561, 6871, 7145, 7575, 7834, 8087, 8386],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'靖江市',
                type:'line',
                data:[7033, 7033, 7033, 7033, 7033, 7033, 7033, 7160, 7160, 7160, 7160, 7160],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'泰兴市',
                type:'line',
                data:[6703, 6703, 6703, 6703, 6703, 6703, 6703, 6703, 6703, 6770, 7046, 7046],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'宝应县',
                type:'line',
                data:[7484, 7792, 7725, 7811, 7787, 7590, 7665, 7905, 8278, 8471, 8663, 8618],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
         ]
    },
    //无锡
    {
        title: {
            text: '2017.2-2018.1 无锡市房价',
            subtext: '无锡房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['崇安区','南长区','北塘区','滨湖区','锡山区','惠山区','宜兴市' ],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'崇安区',
                type:'line',
                data:[16800, 18000, 4515, 14136, 18700, 18500, 18375, 17833, 18000, 18000, 17333, 17500],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'南长区',
                type:'line',
                data:[16333, 14265,17012, 12747, 17409, 17618, 16600, 16533, 16588, 17200, 17454, 17590 ],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'北塘区',
                type:'line',
                data:[12641, 14495, 11057, 11501, 12833, 12500, 13000, 12833, 15000, 13900, 15583, 16028],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'滨湖区',
                type:'line',
                data:[14552, 17237, 16415, 17735, 18447, 19156, 19704, 19722, 19061,18430, 19335, 19146],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'锡山区',
                type:'line',
                data:[11270, 9955, 10118, 9211, 12046, 12137, 12303, 12154, 12400, 12695, 12900, 13132],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'惠山区',
                type:'line',
                data:[14132, 10510, 9838, 10287, 9449, 9684, 10137, 10061, 10227, 10504, 10920, 11013],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'宜兴市',
                type:'line',
                data:[13063, 11460, 8333, , , , , , , , , 9555],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            
        ]
    },
    //宿州
    {
        title: {
            text: '2017.2-2018.1 宿迁市房价',
            subtext: '宿迁房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['宿城区','沐阳县','泗阳县','泗洪县'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'宿城区',
                type:'line',
                data:[5274, 5384, 5609, 5907, 6162, 6476, 6580, 6706, 6823, 6998, 7172, 7117],
                     markPoint: {
                         data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'沭阳县',
                type:'line',
                data:[5072, 5125, 5133, 5240, 5232, 5311, 5452, 5641, 6135, 5870, 5758, 5646],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'泗阳县',
                type:'line',
                data:[4934, 4977, 5053, 5174, 5525, 5899, 5729, 5854, 5899, 5831, 5912, 6331],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'泗洪县',
                type:'line',
                data:[3600, 5072, 4358, 4149, 4020, 4020, ,6730, 6897, 4892, 4915, 5078],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
           
        ]
    },
    //徐州
    {
        title: {
            text: '2017.2-2018.1 徐州市房价',
            subtext: '徐州房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['云龙区','鼓楼区','贾汪区','泉山区','邳州市','新沂市','丰县','沛县','铜山县','睢宁县'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'云龙区',
                type:'line',
                data:[7460, 7689, 7790, 8273, 8931, 9523, 9908, 9684, 9193, 9880, 10272, 10456],
                     markPoint: {
                         data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'鼓楼区',
                type:'line',
                data:[7027, 7290, 7513, 7780, 8285, 8661, 9016, 9127, 9009, 8733, 8623, 8695],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'贾汪区',
                type:'line',
                data:[2533, 2533, 3077, 3734, 12280, 9080, 5028, 6242, 6123, 5636, 5418, 4819],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'泉山区',
                type:'line',
                data:[7749, 7988, 8135, 8257, 8677, 9247, 9482, 9535, 9298, 9473, 9572, 9550],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'邳州市',
                type:'line',
                data:[4469, 4469, 4596, 4703, 4450, 4735, 4735, 4393, 4443, 5960, 5822, 5822],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'新沂市',
                type:'line',
                data:[4465, 4465, 5543, 5587, 4494, 4540, 4540, 4489, 4556, 5400, 5350, 5350],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'丰县',
                type:'line',
                data:[3879, 3879, 3923, 4021, 4261, 4233, 4233, 4233, 4288, 4432, 4473, 4473],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
              {
                name:'沛县',
                type:'line',
                data:[4505, 4505, 4728, 4730, 5177, 5177, 5177, 5177, 5177, 4940, 4886, 4886],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'铜山县',
                type:'line',
                data:[5954, 5954, 6500, 6625, 6875, 7222, 7222, 7154, 7746, 9149, 10441, 10976],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'睢宁县',
                type:'line',
                data:[4049, 4049, 4076, 4122, 4225, 4125, 4125, 3956, 3956, 4496, 4835, 4835],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
        ]
    },
    //盐城
    {
        title: {
            text: '2017.2-2018.1 盐城市房价',
            subtext: '盐城房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['亭湖区','盐都区','大丰市','东台市','阜宁县','建湖县','射阳县','滨海县','响水县'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'亭湖区',
                type:'line',
                data:[11857, 11435, 9895, 12128, 11889, 11120, 10446, 9824, 9047, 9116, 9137, 8995],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'盐都区',
                type:'line',
                data:[6355, 6355, , 10541, 10446, 10356, 10358, 10447, 10616, 10653, 10714, 10286],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'大丰市',
                type:'line',
                data:[,,,,,,,,3248, 4624, 5082, 6627, 7153],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'东台市',
                type:'line',
                data:[5476, 5476, 5476, 5476, 7183, 5589, 6133, 6347, 7386, 7904, 7644, 7278],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'阜宁县',
                type:'line',
                data:[4214, 4214, , , 8663, 8062, 8128, 5974, 4723, 4873, 4798, 4705],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'建湖县',
                type:'line',
                data:[4478, 4478, , , , , , , 8733, 8874, 8718, 8254],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'射阳县',
                type:'line',
                data:[4166,4166,,,,,,5408, 5878, 5950, 5821, 5761],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'滨海县',
                type:'line',
                data:[5591, 5591, ,,,,7426, 8258, 7664, 7766, 7643, 7742],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'响水县',
                type:'line',
                data:[,,,,,,,6594, 6509, 6591, 6405, 6419],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            
        ]
    },
    //扬州
    {
        title: {
            text: '2017.2-2018.1 扬州市房价',
            subtext: '扬州房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邗江区','维扬区','仪征市','江都市','高邮市','宝应县'],
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'邗江区',
                type:'line',
                data:[9588, 9917, 10017, 10245, 10724, 10682, 11042, 11652, 12638, 12958, 12958, 11846],
                     markPoint: {
                         data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'维扬区',
                type:'line',
                data:[8813, 9200, 9568, 10152, 10600, 10880, 11199, 11111, 11275, 11415, 11654, 12002],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'仪征市',
                type:'line',
                data:[6008, 6104, 6137, 6348, 6714, 6628, 7611, 7972, 7675, 7731, 7618, 8097],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'江都市',
                type:'line',
                data:[7886, 7886, 7886, 7835, 8440, 8533, 7675, 8542, 9250, 8700, 8271, 8050],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'高邮市',
                type:'line',
                data:[5800, 5800, 5800, 5800, , , , , , , 5678, 5714],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
             {
                name:'宝应县',
                type:'line',
                data:[7484, 7792, 7725, 7811, 7787, 7590, 7665, 7905, 8278, 8471, 8663, 8618],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
         ]
    },
    //镇江
    {
        title: {
            text: '2017.2-2018.1 镇江市房价',
            subtext: '镇江房产网'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['京口区','润州区','丹徒区', '丹阳市','句容市','扬中市' ]
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2月','3月','4月','5月','6月','7月','8月', '9月','10月','11月','12月','1月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [
            {
                name:'京口区',
                type:'line',
                data:[6970, 7330, 7909, 9095, 9095, 9993, 9917, 10087, 10088, 10140, 10211, 9687 ],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'润州区',
                type:'line',
                data:[8093, 8100, 8111, 8700, 8708, 9553, 9316, 9528, 9278, 9656, 10063, 10146],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'丹徒市',
                type:'line',
                data:[5591, 5591, 9309, 6499, 6940, 7014, 7014, 6678, 6861, 7308, 7211, 7210],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'丹阳市',
                type:'line',
                data:[5760, 5780, 6160, 7040, 7040, 7242, 7242, 7212, 7411, 7712, 7862, 7937],
                 markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'句容市',
                type:'line',
                data:[7466, 7988, 8412, 9587, 9283, 12387, 12088, 11775, 11928, 10980, 12000, 12360],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'扬中市',
                type:'line',
                data:[7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7800, 7800, 8400],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            
        ]
    },
];

options.forEach(function(item, index) {
    echarts.init(document.getElementById("city-" + index)).setOption(item);
})


/* tab */
$('#myTabs a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
})