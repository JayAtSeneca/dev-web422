import ComponentB from "./componentB";
export default function ComponentA(props) {
  console.log("ComponentA");
  return <ComponentB setCount={props.setCount}/>;
}
