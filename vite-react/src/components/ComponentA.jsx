import ComponentB from "./ComponentB";

const ComponentA = ({ data }) => {
  return (
    <>
      <ComponentB data={data} />
    </>
  );
};

export default ComponentA;
