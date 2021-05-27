import Button from "react-bootstrap/Button";
import moment from "moment";
import "./comment.css";
const Comment = (props) => {
  return (
    <div className="comment-div">
      <div class="card">
        <div className="card-header" id="headername">
          <div>
            <p>
              {props.name} wrote on{" "}
              {<span>{moment(props.date).format("YYYY-MM-DD")}</span>} :{" "}
            </p>
          </div>

          <div>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
      <div>
        {props.isUser ? (
          <Button
            type="button"
            class="btn btn-danger"
            onClick={props.isClicked}
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
