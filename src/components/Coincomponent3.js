import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Coincomponent3 = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "5px",
          border: "2px solid darkblue",
          display: "flex",
          gap: "34px",
          height: "75px",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <img src={props.imageUrl} alt={props.alt} />
        <div>
          <h1>{props.name}</h1>
          <h2>{props.price}</h2>
        </div>
        <div>
          <Link to={`/coins/${props.name.toLowerCase()}`}>
            <Button
              style={{
                backgroundColor: "blue",
                justifyContent: "flex-end",
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
