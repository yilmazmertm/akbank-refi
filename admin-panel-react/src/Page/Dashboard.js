import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  AreaChart,
} from "recharts";
import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default function Dashboard() {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    api
      .get("product/create-graph")
      .then((response) => setInfoData(response.data.data));
  }, []);

  return (
    <div style={{ paddingTop: 90 }}>
      <AreaChart
        width={1424}
        height={450}
        data={infoData}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
}
