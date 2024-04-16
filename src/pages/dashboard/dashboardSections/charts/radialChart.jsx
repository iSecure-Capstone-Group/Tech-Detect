import ReactApexChart from 'react-apexcharts';

const RadialChart = () => {
  const chartData = {
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%', // Adjust the size to represent 80% visually
          },
          fill: {
            colors: ['#FDAF33']
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '40px',
              fontWeight: 'bold',
              
            },
          },
          
        },
      },
      labels: ['Progress'],
    },
    series: [82], // Value represents 80%
  };

  return (
    <div className="radial-chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={300}
      />
    </div>
  );
};

export default RadialChart;
