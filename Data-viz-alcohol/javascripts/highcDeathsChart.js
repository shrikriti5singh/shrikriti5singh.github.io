Highcharts.chart('highc', {
    chart: {
        type: 'column'
    },
    title: {
        text: '<b>Figure 9: </b>Numbers of alcohol-specific deaths, by five-year age group and individual cause; deaths registered in 2020'
    },
    xAxis: {
        categories: ["<1","01-04","05-09","10-14","15-19","20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80-84","85-89","90+"]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Deaths'
        }
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'All other alcohol-specific causes',
        data: [0,0,0,0,0,1,1,8,22,34,44,55,65,45,32,32,11,2,1,1]
    }, {
        name: 'Mental and behavioural disorders due to the use of alcohol',
        data: [0,0,0,0,0,0,3,24,46,68,115,153,149,135,145,101,70,43,17,14]
    }, {
        name: 'External causes',
        data: [0,0,0,0,3,4,11,36,47,73,86,89,83,52,37,18,10,1,2,0]
    }, {
        name: 'Alcoholic liver disease',
        data: [0,0,0,0,0,4,31,118,316,514,829,1089,1227,1049,848,542,289,96,28,5]
    }]
});


Highcharts.chart('genderPie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '<b>Figure 8:</b> Gender % Deaths in 2020'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            colors: [
                '#ff6361', 
                '#003f5c',
                '#ffa600'
              ],
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            },
            size: 250
        }
    },
    series: [{
        colorByPoint: true,
        name: 'Share',
        data: [ {
            name: 'Person',
            y: 33.17
        }, {
            name: 'Female',
            y: 21.80
        }, {
            name: 'Male',
            y: 45.02
        }]
    }]
});



Highcharts.chart('countryrank', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Alcohol Consumption in Every Country'
    },
    subtitle: {
        text: 'Source:  who.int'
    },
    xAxis: [{
        categories: ['Estonia','Lithuania','Czech Republic','Seychelles','Germany','Nigeria',' Ireland',' Moldova',' Latvia',' Bulgaria',' France',' Romania',' Slovenia',' Portugal',' Luxembourg',' Belgium',' Russia',' Austria',' Poland',' Gabon',' Slovakia','  Switzerland',' Hungary',' United Kingdom',' Andorra',' Equatorial Guinea',' Belarus',' Serbia',' Cyprus',' Uruguay',' Finland',' New Zealand',' Australia',' Cook Islands',' Denmark',' Greece',' Laos',' South Korea',' Spain',' Eswatini',' Saint Lucia',' Argentina',' Georgia',' Namibia',' United States',' Barbados',' Uganda',' St Kitts and Nevis',' Tanzania',' Chile',' Grenada',' South Africa',' Sweden',' Iceland',' Rwanda',' Cameroon',' Canada',' Croatia',' Netherlands',' Ukraine',' Botswana',' Ivory Coast',' Trinidad and Tobago',' Thailand',' Vietnam',' Burkina Faso',' Dominica',' St Vincent & the Grenadines',' Malta',' North Macedonia',' Japan',' Montenegro',' Panama',' Brazil',' Congo',' Kazakhstan',' Albania',' Burundi',' Italy',' Norway',' Mongolia',' China',' Paraguay',' Antigua and Barbuda',' Niue',' Dominican Republic',' São Tomé and Príncipe',' Belize',' Cambodia',' Philippines',' Mexico',' Angola',' Bosnia and Herzegovina',' Guyana',' Peru',' Kyrgyzstan',' Cuba',' Nauru',' Colombia',' Haiti',' Liberia',' Cape Verde',' India',' Sierra Leone',' Venezuela',' Armenia',' Turkmenistan',' Nicaragua',' Suriname',' Lesotho',' Bolivia',' Costa Rica',' Guinea-Bissau',' Myanmar',' Zambia',' Zimbabwe',' Bahamas',' Ecuador',' Sri Lanka',' Jamaica',' Honduras',' North Korea',' Gambia',' Israel',' United Arab Emirates',' El Salvador',' Malawi',' Mauritius',' Kenya',' Central African Republic',' Tajikistan',' Togo',' Benin',' Fiji',' Ethiopia',' Ghana',' Maldives',' Uzbekistan',' DR Congo',' Micronesia',' Samoa',' Guatemala',' Mozambique',' East Timor','   Nepal',' Qatar',' Singapore',' Turkey',' Bahrain',' Madagascar',' Tunisia',' Tuvalu',' Chad',' Lebanon',' Tonga',' Solomon Islands',' Eritrea',' Guinea',' Mali',' Papua New Guinea',' Iran',' Vanuatu',' Algeria',' Comoros',' Malaysia',' Azerbaijan',' Indonesia',' Oman',' Jordan',' Senegal',' Bhutan',' Morocco',' Djibouti',' Niger',' Sudan',' Brunei',' Egypt',' Iraq',' Kiribati',' Pakistan',' Syria',' Afghanistan',' Saudi Arabia',' Yemen',' Bangladesh',' Kuwait',' Libya',' Mauritania',' Somalia'],
        crosshair: true
    }],
    yAxis: { // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Pure alcohol consumption among persons (age 15+) in litres per capita',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, 
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 700,
        verticalAlign: 'top',
        y: 50,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Consumption Recorded in 2016',
        type: 'column',
        data: [16.9,15,14.3,13.8,13.4,13.4,13,13,12.9,12.7,12.6,12.6,12.6,12.3,12.3,12.1,11.7,11.6,11.6,11.5,11.5,11.5,11.4,{
            y: 11.4,
            color: '#BF0B23'
        },11.3,11.3,11.2,11.1,10.8,10.8,10.7,10.7,10.6,10.6,10.4,10.4,10.4,10.2,10,9.9,9.9,9.8,9.8,9.8,9.8,9.6,9.5,9.4,9.4,9.3,9.3,9.3,9.2,9.1,9,8.9,8.9,8.9,8.7,8.6,8.4,8.4,8.4,8.3,8.3,8.2,8.2,8.2,8.1,8.1,8,8,7.9,7.8,7.8,7.7,7.5,7.5,7.5,7.5,7.4,7.2,7.2,7,7,6.9,6.8,6.7,6.7,6.6,6.5,6.4,6.4,6.3,6.3,6.2,6.1,6,5.8,5.8,5.8,5.7,5.7,5.7,5.6,5.5,5.4,5.2,5.1,5,4.8,4.8,4.8,4.8,4.8,4.8,4.4,4.4,4.3,4.2,4,3.9,3.8,3.8,3.8,3.7,3.7,3.6,3.4,3.3,3.3,3.1,3,3,2.8,2.7,2.7,2.7,2.6,2.5,2.5,2.4,2.4,2.1,2,2,2,2,1.9,1.9,1.9,1.7,1.5,1.5,1.5,1.4,1.3,1.3,1.3,1.2,1,1,0.9,0.9,0.9,0.8,0.8,0.8,0.7,0.7,0.6,0.6,0.5,0.5,0.5,0.4,0.4,0.4,0.4,0.3,0.3,0.2,0.2,0.1,0,0,0,0,0],
        tooltip: {
            // valueSuffix: ' mm'
        }

    }, {
        name: '2025 Projection',
        type: 'spline',
        data: [11.9,13.9,11.4,10.6,12.6,12.5,13.9,12.4,15.1,13.4,12.1,13.8,10.6,11,11,12.3,12.4,11.4,12.7,10.9,11.3,10.3,10.9,11.8,10.5,12.4,13.2,11.6,11.6,13.3,10.9,10.4,10.3,18.3,10.3,10.8,10.9,14.4,8.9,10.1,9.1,10.3,11.6,8.5,10.3,10.5,10.3,10.3,9.9,9.1,9.6,9,10.1,10.6,7.6,10.2,9.2,8.2,8.8,10,11.8,8.5,9.5,9.3,11.4,8.3,6.9,8.7,8.5,6.6,7.9,7.9,8.4,8.3,8.2,8.8,9.2,6.6,6.1,8.2,9.1,8.1,9.7,8.4,7,8,7.4,7.2,8.1,7,7.7,6.6,7.8,6.1,6.4,7.4,6.4,6.3,5.3,6,4.9,6.2,7.9,4.7,3.9,6.1,6.8,5.8,5.1,4.6,5.2,4.8,4.8,6.4,4.7,4.2,4.3,5.1,5.1,4,4.3,3.3,4.1,4.3,5.5,4.9,4.3,3.5,3.1,3.2,4.9,3.1,4.6,3.1,3.7,2.7,3,2.6,3.4,2.9,3.3,2.3,2.6,5.5,2.6,2.2,2,1.9,1.8,1.6,2.1,1.7,1.8,1.2,1.7,1.2,2.8,1,1.3,1.1,1,1.5,1.1,1.1,0.8,0.9,1.6,0.9,1,0.6,0.4,0.7,0.7,0.7,0,0.3,0.5,0.6,0.4,0.4,0.3,0.2,0.2,0.1,0,0,0,0,0],
        tooltip: {
            // valueSuffix: '°C'
        }
    }]
});

Highcharts.chart('drinksPie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Gender % Deaths in 2020'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            },
            size: 250
        }
    },
    series: [{
        colorByPoint: true,
        name: 'Share',
        data: [ {
            name: 'Beer',
            y: 36.06
        }, {
            name: 'Other',
            y: 6.23
        }, {
            name: 'Spirits',
            y: 24.0
        }, {
            name: 'Wine',
            y: 33.71
        }]
    }]
});
