export default function ButtonComponent(props) {
  //const userLiked = false;
  //value={userLiked ? "⭐" : "☆"}
  return (
    <>
      <button
        style={{
          width: "20px",
          padding: "0",
          border: "0px solid green",
          background: "transparent",
          fontSize: "50px",
        }}
        onClick={props.onClick}
        value={props.value}
      >
        {props.liked ? <span style={{ marginLeft: "-8px" }}>⭐</span> : "☆"}
      </button>
    </>
  );
}
