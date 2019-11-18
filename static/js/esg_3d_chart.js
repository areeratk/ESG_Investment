document.addEventListener('DOMContentLoaded', (event) => {
      
    Highcharts.chart('3d_chart_container', {
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 40
            }
        },
    
        title: {
            text: 'S&P 500 Companies Sustainability Report'
        },
        subtitle: {
            text: 'Source: <a href="https://www.ga-institute.com/press-releases/article/flash-report-86-of-sp-500-indexR-companies-publish-sustainability-responsibility-reports-in-20.html">Governance & Accountability Institute</a>'
        },
    
        xAxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },
    
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '',
                skew3d: true
            }
        },
    
        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        },
    
        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            }
        },
    
        series: [{
            name: 'Reporters',
            data: [20, 53, 72, 75, 81, 82, 85, 86],
            stack: 'whole'
        }, {
            name: 'Not Reporters',
            data: [80, 47, 28, 25, 19, 18, 15, 14],
            stack: 'whole'
        
        }]
    });
    });
    
    