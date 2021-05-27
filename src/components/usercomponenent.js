import CommentComponent from "../components/comment";

const userComponent = (props) => {
  return (
    <div>
      <h1>{props.firstName}</h1>
      <h2>{props.email}</h2>
      <p>{props.blocked}</p>
    </div>
  );
};

export default userComponent;
