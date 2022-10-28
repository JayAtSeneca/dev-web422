import { useAtom } from "jotai";
import { countAtom } from "../store";
export default function Component3(){
    console.log("Component3");
    const [count] = useAtom(countAtom);
    return (
        <>
            value:  {count}
        </>
    );
}