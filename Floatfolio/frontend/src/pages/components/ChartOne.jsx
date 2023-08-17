import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  title: {
    text: 'Annual Report',
    align: 'center',
  },
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
  },
  colors: ["#240d50", "#471AA0"],
  chart: {
    fontFamily: 'Trebuchet MS, sans-serif',
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: true,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false, //datalabels
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#240d50", "#471AA0"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      text: "In Thouands",
      style: {
        fontSize: "10px",
      },
    },
    min: 0,
    max: 100,
  },
};

const ChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Total Sales",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
      {
        name: "Total Revenue",
        data: [23, 11, 22, 23, 13, 22, 37, 21, 44, 22, 30, 45],
      },
    ],
  });

  return (
    <div className=" rounded-lg  border-2 m-2 bg-secondaryBg border-dBrand dark:border-secondaryBg dark:bg-lBrand text-dBrand overflow-hidden md:w-[70%] w-full">
      <div>
        <ReactApexChart
          options={options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartOne;
