import { SetCountContext } from "../pages/_app";
import { useContext } from "react";

export default function ComponentC(props){

  const setCount = useContext(SetCountContext);

  console.log("ComponentC Rendered");
  return (<>
    <button onClick={e=>{setCount(count => count + 1)}}>Increase Value</button>
  </>);
}