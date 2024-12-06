import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import ReactApexChart from 'react-apexcharts';

import { formatNumber } from '../../../utils/format';
import { getProfitClaaName } from '../../../utils/utils';

export default function SummaryCard(props) {
  const title = props.title;
  const totalValuation = props.totalValuation;
  const totalProfit = props.totalProfit;
  const totalProfitRate = props.totalProfitRate;
  const data = props.data;
  const isDollar = props.isDollar;

  const [state, setState] = React.useState({
    series: [
      {
        name: '평가금액',
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
            return formatNumber(value);
          },
        },
      },
    },
  });

  useEffect(() => {
    const formattedData = data.map((item) => ({
      x: item.date,
      y: item.valuation,
    }));

    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: '평가금액',
          data: formattedData,
        },
      ],
    }));
  }, [data]);

  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>
          {formatNumber(totalValuation)}
          {isDollar ? ' 달러(USD)' : ' 원(KRW)'}
        </Card.Title>
        <Card.Text>
          <span className={getProfitClaaName(totalProfit)}>
            {totalProfit > 0 ? '+' : ''}
            {formatNumber(totalProfit)}
            {isDollar ? ' 달러(USD)' : ' 원(KRW)'} ({totalProfit > 0 ? '+' : ''}
            {totalProfitRate}% )
          </span>
        </Card.Text>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type='line'
          height={350}
        />
      </Card.Body>
    </Card>
  );
}
