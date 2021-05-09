import Button from "react-bootstrap/Button";

export default function ButtonComponent(props) {
  //const userLiked = false;
  //value={userLiked ? "⭐" : "☆"}
  return (
    <>
      <Button
        style={{
          width: "20px",
          padding: "0",
          border: "none",
          background: "none",
          fontSize: "50px",
        }}
        onClick={props.onClick}
        value={props.value}
      >
        {props.liked ? "⭐" : "☆"}
      </Button>
    </>
  );
}
