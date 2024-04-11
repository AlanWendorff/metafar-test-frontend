const tableOptions = (text: string, currency: string, prices: number[] | undefined) => ({
  chart: {
    type: 'line'
  },
  title: {
    text
  },
  yAxis: {
    title: {
      text: currency
    }
  },
  legend: {
    enabled: false
  },
  series: [
    {
      data: prices
    }
  ]
});

export default tableOptions;
