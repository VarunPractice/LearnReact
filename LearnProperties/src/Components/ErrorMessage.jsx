const ErrorMessage = ({ items }) => {
  if (items.length === 0) {
    return <h3>I'm hungry</h3>;
  }
  return null;                 
};

export default ErrorMessage;
