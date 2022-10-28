import ComponentA from '../components/componentA'
import Component1 from '../components/component1'


export default function Home(props) {
  return (
    <>
      <Component1 count={props.count} />
      <br/>
      <br/>
      <ComponentA setCount={props.setCount} />
    </>
  )
}
