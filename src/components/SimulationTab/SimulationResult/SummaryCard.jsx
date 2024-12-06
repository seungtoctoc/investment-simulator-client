import React from 'react';

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

  const formattedData = data.map((item) => ({
    x: item.date, // 'date'를 'x'로 매핑
    y: item.valuation, // 'valuation'을 'y'로 매핑
  }));

  const [state, setState] = React.useState({
    series: [
      {
        name: '평가금액',
        data: formattedData,
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
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (value) {
            return isDollar
              ? formatNumber(value) + '$'
              : formatNumber(value) + '원';
          },
        },
      },
    },
  });

  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{formatNumber(totalValuation)}원</Card.Title>
        <Card.Text>
          <span className={getProfitClaaName(totalProfit)}>
            {totalProfit > 0 ? '+' : ''}
            {formatNumber(totalProfit)}원 ({totalProfit > 0 ? '+' : ''}
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
