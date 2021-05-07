const userComponent = (props) => {
  return (
    <div>
      <h1>{props.firstName}</h1>
      <h2>{props.email}</h2>
    </div>
  );
};

export default userComponent;
