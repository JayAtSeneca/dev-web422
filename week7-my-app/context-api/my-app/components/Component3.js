import { CountContext } from "../pages/_app";
import { useContext } from 'react'

export default function Component3(props){

  const count = useContext(CountContext);

  console.log("Component3 Rendered");
  return (<>
    Value: {count}
  </>);
}