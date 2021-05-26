import Button from "react-bootstrap/Button";
import "./comment.css";
const Comment = (props) => {
  return (
    <div
      // style={{
      //   backgroundColor: "white",
      //   opacity: "55%",
      //   width: "25%",
      //   borderRadius: "58px",
      //   marginLeft: "auto",
      //   marginRight: "auto",
      // }}
      className="comment-div"
    >
      <div class="card">
        <div className="card-header" id="headername">
          <div>
            <p>{props.name}</p>
          </div>
          <hr />
          <div>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
      <div>
        {props.isUser ? (
          <Button
            onClick={props.isClicked}
            style={{ backgroundColor: "red", borderRadius: "58px" }}
          >
            {" "}
            DELETE COMMENT{" "}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Comment;
