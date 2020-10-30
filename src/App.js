import React from "react";
import { readString } from "react-papaparse";
import useSWR from "swr";
import logo from "./logo.svg";
import "./App.css";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";

const App = () => {
    const url = "https://raw.githubusercontent.com/galenguyer/rit-covid-cases/main/rit-covid-cases.csv";
    const fetcher = (...args) =>
        fetch(...args)
            .then((res) => res.text())
            .then((res) => readString(res.trim()).data);

    const { data: data, error: error } = useSWR(url, fetcher);

    if (!data) {
        return (
            <div className="App">
                <h1>Loading...</h1>
            </div>
        );
    }

    console.log("data", data);

    const headings = data.shift();

    const totalCases = data.map((element) => {
      return {
          date: element[0],
          count: parseInt(element[3], 10),
      };
  });

  const rollingSevenDay = data.map((element) => {
    return {
        date: element[0],
        count: parseInt(element[2], 10),
    };
});

    return (
        <div className="App">
        <h2>Total Cases</h2>
        <LineGraph data={totalCases} />
        <h2>Rolling 7 Day New Case Total</h2>
        <BarGraph data={rollingSevenDay} />
        </div>
    );
};

export default App;
