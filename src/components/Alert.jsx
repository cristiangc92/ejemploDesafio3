const Alert = ({ msg, color }) => {
  return (
    <>
      <div className={`alert alert-${color} my-2`}>
        <p>{msg}</p>
      </div>
    </>
  );
};

export default Alert;
