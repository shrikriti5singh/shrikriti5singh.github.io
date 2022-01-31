Highcharts.chart('newDiv', {
    chart: {
        height: 600,
        inverted: true
    },

    title: {
        text: '<b>Figure 4:</b> Average expenditure on food and drink, per person per week, 2018/19'
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var nodeName = point.toNode.name,
                    nodeId = point.toNode.id,
                    nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
                    parentDesc = point.fromNode.id;
                return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
            }
        }
    },

    series: [{
        type: 'organization',
        name: '',
        keys: ['from', 'to'],
        data: [
            ['Total Expenditure', 'Household Expenditure'],
            ['Total Expenditure', 'Eating Out Expenditure'],
            ['Household Expenditure', 'Food & Drinks'],
            ['Household Expenditure', 'Alcohol'],
            ['Eating Out Expenditure', 'Food & Drinks '],
            ['Eating Out Expenditure', 'Alcohol ']
        ],
        levels: [{
            level: 0,
            color: 'silver',
            dataLabels: {
                color: 'black'
            },
            height: 25
        }, {
            level: 1,
            color: 'silver',
            dataLabels: {
                color: 'black'
            },
            height: 25
        }, {
            level: 2,
            color: '#980104'
        }],
        nodes: [{
            id: 'Total Expenditure',
            title: 'Total Expenditure',
            name: '£46.60'
        }, {
            id: 'Household Expenditure',
            title: 'Household Expenditure',
            name: '£32.12',
            color: '#007ad0'
        }, {
            id: 'Eating Out Expenditure',
            title: 'Eating Out Expenditure',
            name: '£14.48',
            color: '#007ad0'
        }, {
            id: 'Food & Drinks',
            title: 'Food & Drinks',
            name: '£28.32'
        }, {
            id: 'Food & Drinks ',
            title: 'Food & Drinks',
            name: '£11.12',
        }, {
        		id: 'Alcohol',
            title: 'Alcohol',
            name: '£3.80'
        }, {
        		id: 'Alcohol ',
            title: 'Alcohol',
            name: '£3.35'
        }],
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: {
            color: 'white'
        },
        borderColor: 'white',
        nodeWidth: 65
    }],
    tooltip: {
        outside: true
    },
    exporting: {
        allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 600
    }

});

