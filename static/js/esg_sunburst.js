document.addEventListener('DOMContentLoaded', (event) => {
      
    var data = [{
        id: '0.0',
        parent: '',
        name: 'ESG'
    }, {
        id: '1.1',
        parent: '0.0',
        name: 'ENVIRONMENTAL'
    }, {
        id: '1.2',
        parent: '0.0',
        name: 'SOCIAL'
    }, {
        id: '1.3',
        parent: '0.0',
        name: 'CORPORATE GOVERNANCE'
    }, 
        
    /* ENVIRONMENTAL */
    {
        id: '2.1',
        parent: '1.1',
        name: 'Water Use & Conservation'
        ,
        value: 1
    }, {
        id: '2.2',
        parent: '1.1',
        name: 'Sustainable Natural Resources / Agriculture'
        ,
        value: 1        
    }, {
        id: '2.3',
        parent: '1.1',
        name: 'Pollution / Toxics'
        ,
        value: 1
    }, {
        id: '2.4',
        parent: '1.1',
        name: 'Clean Technology'
        ,
        value: 1
    }, {
        id: '2.5',
        parent: '1.1',
        name: 'Climate Control / Carbon'
        ,
        value: 1
    }, {
        id: '2.6',
        parent: '1.1',
        name: 'Green Building / Smart Growth'
        ,
        value: 1
    }, 

    /* SOCIAL */

    {
        id: '2.7',
        parent: '1.2',
        name: 'Human Rights'
        ,
        value: 1
    }, {
        id: '2.8',
        parent: '1.2',
        name: 'Avoidance of Tobacco or Other Harmful Products'
        ,
        value: 1
    }, {
        id: '2.9',
        parent: '1.2',
        name: 'Community Development'
        ,
        value: 1
    }, {
        id: '2.10',
        parent: '1.2',
        name: 'Diversity & Anti-Bias Issues'
        ,
        value: 1
    }, {
        id: '2.11',
        parent: '1.2',
        name: 'Workplace Benefits'
        ,
        value: 1
    }, {
        id: '2.12',
        parent: '1.2',
        name: 'Labor Relations'
        ,
        value: 1
    }, {
        id: '2.13',
        parent: '1.2',
        name: 'Workplace Safety'
        ,
        value: 1
    },


    /* CORPORATE GOVERNANCE */
    
    {
        id: '2.14',
        parent: '1.3',
        name: 'Corporate Political Contributions'
        ,
        value: 1
    }, {
        id: '2.15',
        parent: '1.3',
        name: 'Executive Compensation'
        ,
        value: 1
    }, {
        id: '2.16',
        parent: '1.3',
        name: 'Board Diversity'
        ,
        value: 1
    }, {
        id: '2.17',
        parent: '1.3',
        name: 'Anti-Corruption Policies'
        ,
        value: 1
    }, {
        id: '2.18',
        parent: '1.3',
        name: 'Board Independence'
        ,
        value: 1
        
    
    }]; 
    
     
    // Splice in transparent for the center circle
    Highcharts.getOptions().colors.splice(0, 0, 'transparent');
    
    
    Highcharts.chart('sunburst_container', {
    
        chart: {
            height: '85%'
        },
    
        title: {
            text: 'Examples of ESG Criteria Used by Sustainable Investors'
        },
        subtitle: {
            text: 'Source: <a href="https://www.ussif.org">US SIF</a>'
        },
        series: [{
            type: "sunburst",
            data: data,
            allowDrillToNode: true,
            cursor: 'pointer',
            dataLabels: {
                format: '{point.name}',
                filter: {
                    property: 'innerArcLength',
                    operator: '>',
                    value: 1
                },
                style: {
                    fontSize: "20px"
                }
            },
            levels: [{
                level: 1,
                levelIsConstant: false,
                dataLabels: {
                    filter: {
                        property: 'outerArcLength',
                        operator: '>',
                        value: 1
                    }
                }
            }, {
                level: 2,
                colorByPoint: true
            
            }]
    
        }],
        
    });
    });
    
    