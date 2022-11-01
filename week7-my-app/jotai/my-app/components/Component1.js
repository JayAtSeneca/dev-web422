import Component2 from "./Component2";

export default function Component1(props){
  console.log("Component1 Rendered");
  return (<>
    <Component2 />
  </>);
}