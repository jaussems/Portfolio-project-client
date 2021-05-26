import { Button } from "react-bootstrap";
import "./welcomepagestyling.css";

const WelcomePage = () => {
  return (
    <div style={{ height: "100vh" }} className="welcomePageStyle">
      <h1>Welcome to the See Crypto App</h1>
      <Button class="btn btn-dark btn-lg" style={{ marginTop: "20em" }}>
        <a href="/home/1">Click Here to navigate to the main page</a>
      </Button>
    </div>
  );
};

export default WelcomePage;
