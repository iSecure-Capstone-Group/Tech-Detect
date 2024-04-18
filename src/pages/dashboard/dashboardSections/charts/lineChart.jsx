import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const seriesData = [
    {
      name: "Anomalies",
      data: [0, 25, 5, 31, 23, 75, 50, 60, 25, 49, 29, 90],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Anomalies Detected by Month",
      align: "center",
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#FDAF33"], 
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={seriesData}
          type="line"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LineChart;
