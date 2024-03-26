import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
export default function PieChartDemo() {
  const [data, setData] = useState([
    {
      data: [
        { id: 0, value: 10, label: "series A" },
        { id: 1, value: 15, label: "series B" },
        { id: 2, value: 20, label: "series C" },
      ],
    },
  ]);

  const generateRandomData = () => {
    const newData = [
      {
        data: [
          { id: 0, value: Math.floor(Math.random() * 100), label: "series A" },
          { id: 1, value: Math.floor(Math.random() * 100), label: "series B" },
          { id: 2, value: Math.floor(Math.random() * 100), label: "series C" },
        ],
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

  return <PieChart series={data} width={400} height={200} />;
}
