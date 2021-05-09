import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CoinComponent2 from "../components/coincomponent2";
import CommentComponent from "../components/comment";
import Coinchart from "../components/coinchart";
import Commentform from "../components/commentform";
import { selectUserId } from "../store/user/selector";
import {
  fetchCoin,
  fetchComments,
  addComment,
  deleteComment,
} from "../store/specificcoinpage/action";
import { GetSingleCoin, GetComments } from "../store/specificcoinpage/selector";
import { selectToken } from "../store/user/selector";

const SpecificCoinPage = () => {
  const dispatch = useDispatch();
  let { coinId } = useParams();
  const specificcoin = useSelector(GetSingleCoin);
  const userid = useSelector(selectUserId);
  const comments = useSelector(GetComments);
  const token = useSelector(selectToken);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  function Comment(event) {
    event.preventDefault();
    dispatch(addComment(userid, coinId, name, content));

    setName("");
    setContent("");
  }

  function DeleteComment(event) {
    event.preventDefault();
    dispatch(deleteComment(userid, coinId));
  }

  useEffect(() => {
    dispatch(fetchCoin(coinId));
    dispatch(fetchComments(coinId));
  }, [dispatch, coinId]);

  return (
    <>
      <div>
        <h1>Welcome to the Specific Coin Page!</h1>
        {specificcoin.map((coins) => {
          return (
            <div key={coins.id}>
              <CoinComponent2
                name={coins.name}
                imageUrl={coins.image.large}
                currentprice={coins.market_data.current_price.usd}
                alt={coins.symbol}
              />
            </div>
          );
        })}
        <div>
          <Coinchart />
        </div>
        <div>
          {token ? (
            <Commentform
              onChangeName={(e) => {
                setName(e.target.value);
              }}
              onChangeContent={(e) => {
                setContent(e.target.value);
              }}
              isClicked={Comment}
            />
          ) : null}
        </div>

        <div>
          <h1>Comments</h1>
          {comments.map((usercomments) => {
            return (
              <div>
                <CommentComponent
                  key={usercomments.id}
                  name={usercomments.name}
                  content={usercomments.content}
                  isUser={usercomments.userId === userid ? true : false}
                  isClicked={DeleteComment}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpecificCoinPage;
