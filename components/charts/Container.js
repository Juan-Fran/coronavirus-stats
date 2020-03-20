import React, { useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting';
import Highcharts3d from 'highcharts/highcharts-3d';
import Highcharts from 'highcharts'

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
    Highcharts3d(Highcharts)
}


function Container (props){
    const [dates, setDates] = useState(props.dates)
    const [data, setData] = useState(props.collection)

    const [options, setOptions] = useState({
        chart: {
            backgroundColor: '#ff0000',
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            width: 800,
            height: 600,
            type: 'column',
            styledMode: true,
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Corona virus Spain'
        },
        responsive: {  
            rules: [{  
              condition: {  
                maxWidth: 1000  
              },  
              chartOptions: {  
                legend: {  
                  enabled: false  
                }  
              }  
            }]  
          },
        plotOptions: {
            column: {
                depth: 100,
                color: '#ff0000',
                colors: ['#ff0000'],
                groupZPadding: 10
            }
        },
        xAxis: {
            categories: dates
        },
        series: [{
            data:props.collection,
            color: (props.specificOptions || {}).color || 'blue'
        }]
    } )

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div> 
    )
}

export default Container