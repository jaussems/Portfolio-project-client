const Coincomponent2 = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0EBFE9",
          padding: "5px",
          border: "2px solid darkblue",
          display: "flex",

          height: "50%",
          width: "50%",
        }}
      >
        <img src={props.imageUrl} alt={props.alt} />
        <div>
          <h1>{props.name}</h1>
        </div>
      </div>
    </>
  );
};

export default Coincomponent2;
