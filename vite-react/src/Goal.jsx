export const Goal = () => {
  const shoot = () => alert("goal");

  const yell = (a) => alert(a);

  const buttonStyle = {
    background: "red",
    borderRadius: 5,
  };
  // Alert the button title using argument in function call
  return (
    <>
      <button onClick={shoot} style={buttonStyle}>
        Shoot
      </button>
      <button onClick={() => yell("Yell")} style={buttonStyle}>
        Yell Again
      </button>
    </>
  );
};
