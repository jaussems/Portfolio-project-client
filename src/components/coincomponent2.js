const Coincomponent2 = (props) => {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div
        style={{
          padding: "5px",
          margin: "2em",

          display: "flex",
          justifySelf: "self-start",
          height: "50%",
          width: "90%",
        }}
      >
        <img src={props.imageUrl} alt={props.alt} />
      </div>
    </>
  );
};

export default Coincomponent2;
