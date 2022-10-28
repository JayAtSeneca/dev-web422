import Component3 from "./component3";
export default function Component1(props) {
  console.log("Component2");
  return <Component3 count={props.count}/>;
}
