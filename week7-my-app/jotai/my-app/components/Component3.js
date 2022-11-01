import { useAtom } from "jotai";
import { countAtom } from "../store";

export default function Component3(props){
  // const [count, setCount] = useAtom(countAtom);
  const [count] = useAtom(countAtom); // since we aren't using setCount

  console.log("Component3 Rendered");
  return (<>
    Value: {count}
  </>);
}