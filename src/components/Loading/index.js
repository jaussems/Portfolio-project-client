import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";

export default function Loading() {
  return (
    <div className="loading_spinner text-warning">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
