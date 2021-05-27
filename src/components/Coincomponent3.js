import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Coincomponent3 = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "transparent",
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
        <div style={{}}>
          <Link to={`/coins/${props.coinid}`}>
            <Button class="btn btn-info" style={{ marginTop: "1em" }}>
              See Details
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Coincomponent3;
