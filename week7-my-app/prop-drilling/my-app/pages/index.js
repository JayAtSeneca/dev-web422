import Component1 from "../components/Component1";
import ComponentA from "../components/ComponentA";

export default function Home(props) {
  return (
    <>
      <Component1 count={props.count} /><br />
      <ComponentA setCount={props.setCount} />
    </>
  )
}
