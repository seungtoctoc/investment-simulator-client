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

  const formattedData = data.map((item) => ({
    x: item.date, // 'date'를 'x'로 매핑
    y: item.valuation, // 'valuation'을 'y'로 매핑
  }));

  const [state, setState] = React.useState({
    series: [
      {
        data: formattedData,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
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
