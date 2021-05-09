import Button from "react-bootstrap/Button";

const Comment = (props) => {
  return (
    <div style={{ backgroundColor: "blueviolet", border: "2px solid green" }}>
      <p>{props.name}</p>
      <p>{props.content}</p>
      <div>
        {props.isUser ? (
          <Button onClick={props.isClicked} style={{ backgroundColor: "red" }}>
            {" "}
            DELETE COMMENT{" "}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Comment;
