import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Coincomponent3 = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "transparent",
          opacity: "55%",
          padding: "5px",
          justifyContent: "center",
          display: "flex",
          gap: "34px",
          height: "75px",
          width: "100%",
        }}
      >
        <img
          style={{ width: "125", height: "75" }}
          src={props.imageUrl}
          alt={props.alt}
        />
        <div>
          <h1>{props.name}</h1>
          <h2>{props.price}</h2>
        </div>
        <div
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overFlow: "hidden",
            width: "10%",
            alignItems: "center",
          }}
        >
          <Link to={`/coins/${props.name.toLowerCase()}`}>
            <Button
              style={{
                backgroundColor: "orange",
                marginTop: "2.25em",
                alignText: "center",
                justifyContent: "flex-end",
                width: "10em",
              }}
            >
              See Details
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Coincomponent3;
