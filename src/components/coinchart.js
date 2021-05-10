import React, { useState } from "react";
import moment from "moment";
import {
  LineChart,
  AreaChart,
  Area,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const axios = require("axios");
const Coinchart = (props) => {
  const [apidata, setApiData] = useState();
  const [apiprices, setApiPrices] = useState();

  async function GetData(req, res) {
    try {
      const coindata = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${moment()
          .subtract(90, "days")
          .unix()}&to=${moment().unix()}`
      );

      const data = coindata.data.prices.map((pair) => ({
        date: moment.unix(pair[0]).format("YYYY-MM-DD"),
        price: pair[1],
      }));
      console.log(`THE DATA I GOT`, data);

      setApiData(data);
      //setApiPrices(coindata.data.prices.flatMap((x) => [x[1]]));
    } catch (e) {
      console.log(e.message);
    }
  }
  if (!apidata) {
    GetData();
  }
  const datum = moment.unix(1620034739);
  console.log(`Date`, datum);

  //console.log(apiprices);
  const data = [{ date: apidata, value: apiprices }];

  return (
    <ResponsiveContainer width={600} height={300}>
      <AreaChart width={800} height={300} data={apidata}>
        <Area dataKey="price" />
        <XAxis dataKey="date" interval="preserveStartEnd" />
        <YAxis dataKey="price" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Coinchart;
