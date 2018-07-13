export const slotData =  [
    {
        title: '基本情况', content: [
            {label: '部队番号', value: '中央军白毦', part: 2, componentType: 'labelChild'},
            {label: '部队类型', value: '保卫军', part: 2, componentType: 'labelChild'},
            {label: '军种', value: '陆军', part: 2, componentType: 'labelChild'},
            {label: '编成类型', value: '豫州组建', part: 2, componentType: 'labelChild'}
        ]
    },
    {
        title: '关键岗位人员', content: [
            {label: '统领', value: '陈到', part: 3, componentType: 'labelChild'},
            {label: '都督', value: '魏延', part: 3, componentType: 'labelChild'},
            {label: '谋士', value: '路人甲', part: 3, componentType: 'labelChild'},
        ]
    },
    {
        title: '部队人员实力', content: [{
            componentType: 'chartsChild',
            data: {
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }]
    }
]