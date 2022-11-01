import ComponentB from "./ComponentB";

export default function ComponentA(props){
  console.log("ComponentA Rendered");
  return (<>
    <ComponentB />
  </>);
}