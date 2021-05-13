import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../store/Message/selector";
import { Alert } from "react-bootstrap";
import { clearMessage } from "../store/Message/action";

export default function Message() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Alert
      style={{
        backgroundColor: "green",
        fontSize: "20px",
        width: "400px",
        opacity: "55%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      show={showMessage}
      variant={message.variant}
      dismissible={message.dismissable}
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      {message.text}
    </Alert>
  );
}
