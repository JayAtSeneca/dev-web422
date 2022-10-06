import { useState } from 'react';

export default function Multiples(props){
    const [count, setCount] = useState(1);
    function increaseCount(e){
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
        <h4>Multiples of: {props.of}</h4>
        <p>{props.of * count}</p>
        <button onClick={increaseCount}>Next Multiple</button>
        </div>
    )
}