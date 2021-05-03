import React, { useState, useEffect } from "react";
const axios = require("axios");
const Homepage = () => {
  async function GetData() {
    try {
      const data = await axios.get(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      console.log("data I receive from the API", data);
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  }
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div>
        <h1>Welcome to the homepage</h1>
      </div>
    </>
  );
};

export default Homepage;
