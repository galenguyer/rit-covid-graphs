import React, { PureComponent } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from "recharts";
import "./Graph.css";

const BarGraph = (props) => {
    return (
        <div className="Graph">
            <ResponsiveContainer>
                <BarChart
                    width={730}
                    height={250}
                    data={props.data}
                    margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                >
                    <defs>
                        <linearGradient id="count" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" interval={7} tick={<CustomizedAxisTick />} height={90} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis dataKey="count" type="number"></YAxis>
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text className="Graph-Label" x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-40)">
                    {payload.value}
                </text>
            </g>
        );
    }
}

export default BarGraph;
