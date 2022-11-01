import ComponentC from "./ComponentC";

export default function ComponentB(props){
  console.log("ComponentB Rendered");
  return (<>
    <ComponentC setCount={props.setCount}/>
  </>);
}