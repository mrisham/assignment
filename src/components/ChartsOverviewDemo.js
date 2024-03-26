import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function ChartsOverviewDemo() {
  const [data, setData] = useState([
    { data: [35, 44, 24, 34] },
    { data: [51, 6, 49, 30] },
  ]);

  const generateRandomData = () => {
    const newData = [
      {
        data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)),
      },
      {
        data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)),
      },
    ];
    setData(newData);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BarChart
      series={data}
      height={290}
      xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
