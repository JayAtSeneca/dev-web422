import { useAtom } from 'jotai';
import { countAtom } from '../store';
export default function ComponentC(){
    console.log("ComponentC");
    const [setCount] = useAtom(countAtom)[1];
    return(
        <>
            <button onClick={(e)=>setCount((count)=>count+1)}>Increase Value</button>
        </>
    );
}