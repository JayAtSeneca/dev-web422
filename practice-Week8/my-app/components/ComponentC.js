import { useContext } from 'react';
import {SetCountContext} from '../pages/_app';
export default function ComponentC(){
    console.log("ComponentC");
    const setCount = useContext(SetCountContext);
    return(
        <>
            <button onClick={(e)=>setCount((count)=>count+1)}>Increase Value</button>
        </>
    );
}