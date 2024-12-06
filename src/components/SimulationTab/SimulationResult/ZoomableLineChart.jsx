import React, { useEffect, useState } from 'react';

import ReactApexChart from 'react-apexcharts';
import { formatNumber } from '../../../utils/format';

export default function ZoomableLineChart(props) {
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
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'pan',
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
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
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type='area'
        height={350}
      />
    </div>
  );
}
