import React, { useEffect } from 'react';
import './ResultChart.css';
import { data2chartConfig } from '../utils';
const Chart = require('chart.js');

const ResultChart = (props) => {
  const { data, address } = props;
  let chart = null;
  let ctx = React.createRef();
  const draw = (data) => {
    if (chart) {
      chart.destroy();
      chart = null;
    }

    const { labels, scores } = data2chartConfig(data);

    const config = {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          label: address,
          data: scores,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)'
        }]
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
          }
        }
      }
    }

    ctx = ctx.current.getContext('2d')
    chart = new Chart(ctx, config);
  }

  useEffect(() => {
    draw(data);
  })

  return (
    <div className="chart-wrapper">
      <canvas id="myChart" ref={ctx}></canvas>
    </div>
  );
}

export default ResultChart;