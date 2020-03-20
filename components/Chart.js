import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts/highstock'
// Load Highcharts modules
require('highcharts/indicators/indicators')(Highcharts)
require('highcharts/indicators/pivot-points')(Highcharts)
require('highcharts/indicators/macd')(Highcharts)
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/map')(Highcharts)
require('highcharts/modules/cylinder')(Highcharts)

import React from 'react'

function Chart (props) {
    console.log(props)
    const options = {
        chart: {
            type: 'cylinder',
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
        series: [{
            data: [1, 2, 3]
        }]
    }  
    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Chart