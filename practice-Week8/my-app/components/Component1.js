import Component2 from "./component2";
export default function Component1(props) {
  console.log("Component1");
  return <Component2 count={props.count}/>;
}
