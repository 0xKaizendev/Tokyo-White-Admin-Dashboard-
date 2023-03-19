import React, { useRef, useEffect, useState ,forwardRef, useImperativeHandle,} from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,ChartOptions,ChartType
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker, { name } from 'faker';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// const AreaChart: React.FC<{
//   gradient: {
//     id: string,
//     color1: string,
//     color2: string,
//     color3: string,
//   }[]
// }> = ({ gradient }) => {


const AreaChart= ({gradient,fill}) => {

  const [context, setContext] = useState({})
  const chartRef = useRef(null);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      filler: {
        propagate: true
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }, 
      y: { 
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    }
  }; 
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {

      // const ctx = chart.getContext('2d');
      if(chart){
        const gradientBg = chart.ctx.createLinearGradient(0, 0, 0, 400);
        gradientBg.addColorStop(0, gradient.color1);
        gradientBg.addColorStop(0.5, gradient.color2);
        gradientBg.addColorStop(1, gradient.color3);
        setContext(gradientBg);
      }
     

    }
  }, [gradient]);

  const data = {
    labels,
    datasets: [
      {
        fill: fill,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: gradient.color1,
        backgroundColor: context,
        tension: 0.4,
        showLine: fill? false: true,
        pointStyle: false
      },
    ],
  };
  
  return <Line options={options} data={data} ref={chartRef} />;
}
export default AreaChart