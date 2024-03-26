import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function LineChartDemo() {
  const [data, setData] = useState([
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]);

  // Function to generate random data
  const generateRandomData = () => {
    const newData = [
      {
        data: [
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
        ],
      },
    ];
    setData(newData);
  };

  // Use useEffect to start the interval when the component mounts
  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomData();
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // empty dependency array to run this effect only once

  return (
    <LineChart
      series={data}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      width={500}
      height={300}
    />
  );
}
