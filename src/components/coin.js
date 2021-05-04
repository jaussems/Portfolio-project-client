const Coin = (props) => {
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
        <h1>{props.name}</h1>
        <h2>Current Price : {props.currentprice} $</h2>
      </div>
    </>
  );
};

export default Coin;
