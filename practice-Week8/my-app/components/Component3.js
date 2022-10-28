import { useContext } from 'react';
import {CountContext} from '../pages/_app';
export default function Component3(){
    console.log("Component3");
    const count = useContext(CountContext);
    return (
        <>
            value:  {count}
        </>
    );
}