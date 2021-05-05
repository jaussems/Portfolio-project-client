const Coin = (props) => {
  const userLiked = false;

  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "5px",
          border: "2px solid darkblue",
          display: "flex",
          height: "75px",
        }}
      >
        <img src={props.imageUrl} alt={props.alt} />
        <div>
          <h1>{props.name}</h1>
        </div>

        <div style={{ padding: "0.5em" }}>
          <h2>Current Price : {props.currentprice} $</h2>
        </div>
        {userLiked ? (
          <button
            style={{
              width: "20px",
              padding: "0",
              border: "none",
              background: "none",
              fontSize: "50px",
            }}
          >
            ★
          </button>
        ) : (
          <button
            style={{
              width: "20px",
              padding: "0",
              border: "none",
              background: "none",
              fontSize: "50px",
            }}
          >
            ☆
          </button>
        )}
      </div>
    </>
  );
};

export default Coin;
