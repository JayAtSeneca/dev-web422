import ComponentC from "./componentC";
export default function ComponentB(props) {
  console.log("ComponentB");
  return <ComponentC setCount={props.setCount}/>;
}
