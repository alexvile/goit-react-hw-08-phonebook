export const Error = ({ children }) => {
  return (
    <div>
      <h1>Ups, something went wrong</h1>
      <p>Please try again later</p>
      <p>Erorr message:</p>
      <p>{children}</p>
    </div>
  );
};
