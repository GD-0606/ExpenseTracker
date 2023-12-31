import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export function MyBar(props) {
  const amo = [];
  const labels = [];
  const [labelName,setLabelName]=React.useState(props.name)

  props.obj.forEach((o, i) => {
    if (o.amountType === 'expenses') {
      labels.push(o.description);
      amo.push(Number(o.amount));
     
    }else{
      labels.push(o.description);
      amo.push(Number(o.amount));

    }
  });

  const data = {
    labels,
    datasets: [
      {
        label: labelName,
        data: amo,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 0.4
      }
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: labelName==="Inc"?"Income":"Expense",
      },
      
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Description', // Customize the x-axis label here
        },
      },
      y: {
        beginAtZero: true, // Ensures y-axis starts from 0
        title: {
          display: true,
          text: 'Amount (₹)', // Customize the y-axis label here
        },
        
      },
    },
  };

  return <Bar options={options} data={data} />;
}
