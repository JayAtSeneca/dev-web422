import { useAtom } from 'jotai';
import { packingAtom } from '../store';
import { useState } from 'react';

export default function AddPacking(){
    const [packing, setPacking] = useAtom(packingAtom);
    const [inputValue, setInputValue] = useState();
    function submitForm(e){
        e.preventDefault();
        setPacking((currentList) => [...currentList, inputValue]);
    }
    return(
        <>
    <form onSubmit={submitForm}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <br />
        <br />
        <button type="submit">Update User Name</button>
    </form>
    <p>Items to pack: {packing.length}</p>
    </>
    )
}