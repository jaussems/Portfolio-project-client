import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CoinComponent2 from "../components/coincomponent2";
import CommentComponent from "../components/comment";
import moment from "moment";
import Table from "react-bootstrap/Table";
import Coinchart from "../components/coinchart";
import Commentform from "../components/commentform";
import useInterval from "../hooks/useInterval";
import { Card } from "react-bootstrap";
import {
  fetchCoin,
  fetchComments,
  addComment,
  deleteComment,
} from "../store/specificcoinpage/action";
import { GetSingleCoin, GetComments } from "../store/specificcoinpage/selector";
import "./specificcoinstyle.css";
import { selectToken, selectUser } from "../store/user/selector";

const SpecificCoinPage = () => {
  const dispatch = useDispatch();
  let { coinId } = useParams();
  const specificcoin = useSelector(GetSingleCoin);
  const user = useSelector(selectUser);
  const comments = useSelector(GetComments);
  const token = useSelector(selectToken);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  console.log(specificcoin);
  const coin_data = specificcoin.map((coin) => ({
    name: coin.name,
    image: coin.image.large,
  }));
  //console.log(coin_data[0].name);
  function Comment(event) {
    event.preventDefault();

    setName("");
    setContent("");
    dispatch(
      addComment(
        user.id,
        coinId,
        name,
        content,
        coin_data[0].name,
        coin_data[0].image
      )
    );
  }

  function DeleteComment(event) {
    event.preventDefault();
    dispatch(deleteComment(user.id, coinId));
  }

  useInterval(
    () => {
      dispatch(fetchCoin(coinId));
    },

    20000
  );

  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoin(coinId));
    }
    dispatch(fetchComments(coinId));
  }, [dispatch, coinId]);

  return (
    <div class="container-md" className="first-div">
      <h1>
        Welcome to the {coinId.charAt(0).toUpperCase() + coinId.slice(1)} Page!
      </h1>
      <div>
        {specificcoin
          ? specificcoin.map((coins) => {
              return (
                <div key={coins.id} class="container-fluid">
                  <Card className="card-style">
                    <CoinComponent2
                      name={coins.name}
                      imageUrl={coins.image.large}
                      currentprice={coins.market_data.current_price.usd}
                      alt={coins.symbol}
                    />

                    <Table class="table-info" responsive="lg">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      {specificcoin &&
                        specificcoin.map((coindetails, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <th scope="row">Rank:</th>
                                <td>{coindetails.market_cap_rank}</td>
                              </tr>
                              <tr>
                                <th scope="row">Price:</th>
                                <td>
                                  {coindetails.market_data.current_price.usd} $
                                </td>
                              </tr>

                              <tr>
                                <th scope="row">Circulating Supply:</th>
                                <td>
                                  {coindetails.market_data.circulating_supply}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Price Change:</th>
                                <td>
                                  {" "}
                                  {coindetails.market_data
                                    .market_cap_change_percentage_24h > 0 ? (
                                    <span style={{ color: "green" }}>
                                      {coindetails.market_data.market_cap_change_percentage_24h.toFixed(
                                        2
                                      ) + "↑ "}{" "}
                                    </span>
                                  ) : (
                                    <span style={{ color: "red" }}>
                                      {coindetails.market_data.market_cap_change_percentage_24h.toFixed(
                                        2
                                      ) + "↓"}
                                    </span>
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Marketcap:</th>
                                <td>
                                  {coindetails.market_data.market_cap.usd}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Price Change:</th>
                                <td>
                                  {coindetails.market_data.price_change_24h} $
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Total Volume:</th>
                                <td>
                                  {coindetails.market_data.total_volume.usd}
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                    </Table>
                  </Card>
                </div>
              );
            })
          : null}
      </div>

      <div className="chart-style">
        <Coinchart coinid={coinId} />
      </div>

      <div class="container-fluid">
        <h1>Comments</h1>
        {comments?.map((usercomments, index) => {
          return (
            <div>
              <CommentComponent
                key={index}
                date={usercomments.createdAt}
                name={usercomments.name}
                content={usercomments.content}
                isUser={usercomments.userId === user.id ? true : false}
                isClicked={DeleteComment}
              />
            </div>
          );
        })}
      </div>
      <div class="container-fluid">
        <div>
          {token ? (
            <Commentform
              valueName={name}
              onChangeName={(e) => {
                setName(e.target.value);
              }}
              valueContent={content}
              onChangeContent={(e) => {
                setContent(e.target.value);
              }}
              isClicked={Comment}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SpecificCoinPage;
