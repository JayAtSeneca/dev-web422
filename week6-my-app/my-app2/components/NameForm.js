import {useState, useEffect} from 'react';

export default function NameForm(){

  const [fullName, setFullName] = useState('');

  useEffect(()=>{
    // data from another source 
    setFullName('Homer Simpson');

  },[]);

  function submitForm(e){
    e.preventDefault();
    console.log("Form Submitted");
    console.log(`TODO: Add fullName: ${fullName} to AJAX Request`)
  }

  return (<>
  
    <h3>NameForm Component</h3>

    <form onSubmit={submitForm}>
      Full Name: ({fullName}) <br />
      <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)} required /><br />
      <br />
      <button type="submit">Submit</button>
    </form>
  
  </>);
}