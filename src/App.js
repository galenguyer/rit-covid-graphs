import React from "react";
import { readString } from "react-papaparse";
import useSWR from "swr";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
    const url = "https://raw.githubusercontent.com/galenguyer/rit-covid-cases/main/rit-covid-cases.csv";
    const fetcher = (...args) =>
        fetch(...args)
            .then((res) => res.text())
            .then((res) => readString(res.trim()));

    const { data: data, error: error } = useSWR(url, fetcher);

    if (!data) {
        return (
            <div className="App">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
