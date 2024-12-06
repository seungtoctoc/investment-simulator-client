import React, { useEffect, useState } from 'react';

import ReactApexChart from 'react-apexcharts';
import { formatNumber } from '../../../utils/format';

export default function ColumnChart(props) {
  const { name, data, currency } = props;

  const [state, setState] = React.useState({
    series: [
      {
        name: name,
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          autoSelected: 'pan',
        },
      },

      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'bottom', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function (value) {
            const date = new Date(value);
            const year = String(date.getFullYear() % 100).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          },
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (value) {
            return formatNumber(value) + ' ' + currency;
          },
        },
      },
    },
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: name,
          data: data,
        },
      ],
    }));
  }, [data]);

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type='bar'
      height={350}
    />
  );
}
