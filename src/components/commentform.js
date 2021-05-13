import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Commentform = (props) => {
  return (
    <Container>
      <Form>
        <Form.Label>
          {" "}
          <h2>Comment here:</h2>
        </Form.Label>
        <Container style={{ padding: "5px", margin: "10px" }}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Name </Form.Label>
            <br />
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={props.valueName}
              onChange={props.onChangeName}
            />
          </Form.Group>
        </Container>
        <Container style={{ padding: "5px", margin: "10px" }}>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Content </Form.Label>
            <br />
            <Form.Control
              type="content"
              placeholder="Content"
              value={props.valueContent}
              onChange={props.onChangeContent}
            />
          </Form.Group>
        </Container>
        <Container>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={props.isClicked}>
              Comment
            </Button>
          </Form.Group>
        </Container>
      </Form>
    </Container>
  );
};

export default Commentform;
