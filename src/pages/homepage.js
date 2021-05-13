import React, { useState, useEffect } from "react";
import { fetchCoins, fetchmoreCoins } from "../store/homepage/actions";
import { useDispatch, useSelector } from "react-redux";
import useInterval from "../hooks/useInterval";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";

import { getCoinData } from "../store/homepage/selector";
import CoinComponent from "../components/coin";
import { GetUserFavorites } from "../store/user/actions";
import {
  selectUserCoins,
  selectUserId,
  selectToken,
  selectUser,
} from "../store/user/selector";

const Homepage = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const allusercoins = useSelector(selectUserCoins);
  let allcoins = useSelector(getCoinData);

  const userid = useSelector(selectUserId);
  const user = useSelector(selectUser);
  const [posts, setposts] = useState(100);
  const [page, setpage] = useState(1);

  const [sortcoins, setSortCoins] = useState(0);

  if (sortcoins === 0) {
    const SortAndMap = (arr) => {
      const copy = arr.slice();
      const sorter = (a, b) => {
        return a["index"] - b["index"];
      };
      copy.sort(sorter);
      const res = copy.map(({ name, index }) => {
        return name;
      });
      return res;
    };
    SortAndMap(allcoins);
  } else if (sortcoins === 1) {
    allcoins.sort((a, b) => {
      return a.id.localeCompare(b.id);
    });
  } else if (sortcoins === 2) {
    allcoins.sort((a, b) => {
      return a.current_price - b.current_price;
    });
  } else if (sortcoins === 3) {
    allcoins.sort((a, b) => {
      return b.current_price - a.current_price;
    });
  }

  //makes an array with the users stringCoinId's to check the button with
  const allstringcoinid = allusercoins.map(
    (favoritecoin) => favoritecoin.stringCoinId
  );

  function ScrollPosition() {
    let { scrollY } = useWindowScrollPosition();

    if (window.innerHeight + scrollY > document.body.offsetHeight) {
      dispatch(fetchmoreCoins(50, 3));

      return;
    }
  }

  ScrollPosition();
  useInterval(
    () => {
      dispatch(fetchCoins(posts, page));
    },

    30000
  );

  useEffect(() => {
    dispatch(fetchCoins(posts, page));

    if (token && user) {
      dispatch(GetUserFavorites(userid));
    }
    setposts(100);
    setpage(1);
  }, [dispatch, userid]);

  return (
    <>
      <div>
        <h1>Welcome to the homepage</h1>
        <div>
          <label>Sort by </label>
          <select
            value={sortcoins}
            onChange={(e) => setSortCoins(parseInt(e.target.value))}
          >
            <option name="all" value={0}>
              ---
            </option>
            <option name="name" value={1}>
              By Name
            </option>
            <option name="lowest-price" value={2}>
              By Lowest Price
            </option>
            <option name="highest-price" value={3}>
              By Highest Price
            </option>
          </select>
        </div>

        <table>
          <thead style={{ textAlign: "inherit" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Favorite</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {allcoins.map((coins, index) => {
              return (
                <CoinComponent
                  key={index}
                  randomcolor={Math.floor(Math.random() * 16)}
                  number={index + 1}
                  name={coins.name}
                  imageUrl={coins.image}
                  percetange={
                    coins.price_change_percentage_24h > 0 ? (
                      <span style={{ color: "green" }}>
                        {coins.price_change_percentage_24h.toFixed(2) + "↑ "}{" "}
                      </span>
                    ) : (
                      <span style={{ color: "red" }}>
                        {coins.price_change_percentage_24h.toFixed(2) + "↓"}
                      </span>
                    )
                  }
                  currentprice={coins.current_price}
                  alt={coins.symbol}
                  coinid={coins.id}
                  isLiked={
                    allstringcoinid.includes(coins.name.toLowerCase())
                      ? true
                      : false
                  }
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Homepage;
