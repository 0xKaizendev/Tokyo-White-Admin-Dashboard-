import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, layouts } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: 'Balance',
      data: [12, 19, 3,10],
      backgroundColor: [
        '#44D600',
        '#33C2FF',
        '#FF1A43',
        '#FFA31A',
      ],
      borderColor: [
        '#44D600',
        '#33C2FF',
        '#FF1A43',
        '#FFA31A',
      ],
      borderWidth: 1,
      hoverOffset: 15,
      // borderJoinStyle:'m'
      rotation:15,
      spacing:4,
      offset:2,
    },
  ],
};
const options ={
  plugins: {
    legend: {
      title: {
        display: false,
      }
    }
  },
  
}
export function CryptoChart() {
  return <Doughnut data={data} options={{...options}}  />;
}
