// Statistik.jsx

import React from "react";
import "./styles/Statistic.css";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Sindu Aditya Janadi",
  "Sebastian Pamungkas",
  "Aydin Ilham Pramstha",
];

const colorPalette = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(255, 205, 86, 0.5)",
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: colorPalette,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Data Pemilihan",
    },
  },
};

const Statistik = () => {
  return (
    <div className="statisik">
      <div className="container-statistic">
        <h1 className="title">Statistik Pemilihan</h1>
        <p className="keterangan">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nam
          nulla sed odio libero voluptates, amet vitae, incidunt, dolorum
          placeat aliquam consequatur maiores reprehenderit alias eligendi
          quibusdam qui tempore! Quibusdam.
        </p>
          <div className="chart-container">
            <Bar data={data} options={options} />
          </div>

      </div>
    </div>
  );
};

export default Statistik;
