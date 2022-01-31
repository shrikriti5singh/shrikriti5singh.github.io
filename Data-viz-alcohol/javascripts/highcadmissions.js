Highcharts.chart('admissionsDiv', {

    title: {
        text: 'Admission by Year 2004-2019'
        // y: 385
    },

    subtitle: {
        text: 'Number of admissions (rounded to nearest ten)'
    },

    yAxis: {
        title: {
            text: 'Number of Admissions'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2004 to 2019'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2004
        }
    },

    series: [{
        name: 'Total',
        data: [236770 , 253370 , 277060 , 287450 , 293520 , 300930 , 315870 , 325910 , 327190 , 321660 , 329970 , 330010 , 339280 , 337110 , 337870 , 357660]
    }, {
        name: 'Wholly',
        data: [67490 , 76240 , 85700 , 88270 , 92050 , 92970 , 100250 , 103760 , 105090 , 101690 , 105950 , 102210 , 102970 , 97340 , 95710 , 103430]
    }, {
        name: 'Partially',
        data: [169290 , 177120 , 191360 , 199190 , 201470 , 207960 , 215620 , 222150 , 222100 , 219970 , 224020 , 227800 , 236320 , 239770 , 242160 , 254220]
    }],

    responsive: {
        rules: [{
            condition: {
                /* maxWidth: 500 */
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


Highcharts.chart('deathsAllYears', {

    title: {
        text: '<b>Figure 7:</b> Death rate per 100,000 people registered by gender for 2001-2020'
    },

    yAxis: {
        title: {
            text: 'death rates per 100,000 people'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2001 to 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2001
        }
    },

    series: [{
        name: 'Person',
        data: [10.6,10.9,11.4,11.5,11.8,12.3,12.2,12.7,11.8,12,12,11.1,11.2,11.4,11.3,11.7,12.2,11.9,11.8,14]
    }, {
        name: 'Male',
        data: [14.9,15.4,16.3,16.1,16.7,17.1,17,17.8,16.3,16.8,16.7,15.2,15.5,15.7,15.4,16.2,16.8,16.4,16.1,19]
    }, {
        name: 'Female',
        data: [6.6,6.7,6.9,7.3,7.3,7.7,7.7,7.9,7.6,7.4,7.7,7.2,7.1,7.4,7.5,7.5,8,7.6,7.8,9.2]
    }],

    responsive: {
        rules: [{
            condition: {
                /* maxWidth: 500 */
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});