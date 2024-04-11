const tableOptions = (text: string, currency: string, prices: number[] | undefined) => ({
  title: {
    text: text
  },
  yAxis: {
    title: {
      text: currency
    }
  },
  series: [
    {
      data: prices
    }
  ]
});

export default tableOptions;
