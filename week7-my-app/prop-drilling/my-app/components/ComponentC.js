export default function ComponentC(props){
  console.log("ComponentC Rendered");
  return (<>
    <button onClick={e=>{props.setCount(count => count + 1)}}>Increase Value</button>
  </>);
}