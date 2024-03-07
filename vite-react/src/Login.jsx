export const Login = (props) => {
  // Any JS Logic
  // Write a logic that checks if username & password matches
  // aand send welcome notice
  // else Say Login Failed

  const username = props.username;
  const password = props.password;
  const result =
    username === "Aanshu" && password === "123"
      ? `welcome,${username}`
      : "Login Failed";
  return <>{result}</>;
};

export const Register = ({ username, password }) => {
  return (
    <>
      Your username is {username} &{password}
    </>
  );
};
