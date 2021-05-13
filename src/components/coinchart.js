import React, { useState } from "react";
import moment from "moment";
import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const axios = require("axios");
const Coinchart = (props) => {
  const [apidata, setApiData] = useState();

  async function GetData(req, res) {
    try {
      const coindata = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${
          props.coinid
        }/market_chart/range?vs_currency=usd&from=${moment()
          .subtract(90, "days")
          .unix()}&to=${moment().unix()}`
      );

      const data = coindata.data.prices.map((pair) => ({
        date: moment(pair[0]).format("YYYY-MM-DD"),
        price: pair[1],
      }));

      setApiData(data);
    } catch (e) {
      console.log(e.message);
    }
  }
  if (!apidata) {
    GetData();
  }

  return (
    <ResponsiveContainer width="95%" height={300}>
      <AreaChart data={apidata}>
        <Area dataKey="price" />
        <XAxis dataKey="date" interval="preserveStart" />
        <YAxis dataKey="price" />
        <Tooltip cursor={{ stroke: "purple" }} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Coinchart;
