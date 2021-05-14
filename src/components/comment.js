import Button from "react-bootstrap/Button";

const Comment = (props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        opacity: "55%",
        width: "25%",
        borderRadius: "58px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <p>{props.name}</p>
      <p>{props.content}</p>
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
