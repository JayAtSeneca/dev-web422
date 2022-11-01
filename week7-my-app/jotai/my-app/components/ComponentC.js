import { useAtom } from "jotai";
import { countAtom } from "../store";

export default function ComponentC(props){
  // const [count, setCount] = useAtom(countAtom);
  const setCount = useAtom(countAtom)[1]; // since we aren't using count

  console.log("ComponentC Rendered");
  return (<>
    <button onClick={e=>{setCount(count => count + 1)}}>Increase Value</button>
  </>);
}