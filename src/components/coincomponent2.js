const Coincomponent2 = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>{props.name}</h1>
        <img
          src={props.imageUrl}
          alt={props.alt}
          style={{ marginTop: "1.25em" }}
        />
      </div>
    </div>
  );
};

export default Coincomponent2;
