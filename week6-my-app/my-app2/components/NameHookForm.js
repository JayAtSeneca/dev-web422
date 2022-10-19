import {useForm} from 'react-hook-form';
import {useEffect} from 'react';

export default function NameHookForm(){

  const {register, handleSubmit, setValue, watch, formState: {errors}} = useForm({
    defaultValues: {
      fullName: ''
    }
  });

  useEffect(()=>{
    // pretend data came from an API

    let data = {
      fullName: "Homer Simpson"
    }

    for(const prop in data){
      setValue(prop, data[prop])
    }
    
  }, [setValue]);

  const watchFullName = watch('fullName');


  function submitForm(data){
    console.log(data);
  }

  return (<>

    <h3>NameHookForm Component</h3>

    <form onSubmit={handleSubmit(submitForm)}>
      <span className={errors.fullName && 'hasError'}>Full Name: ({watchFullName})</span> <br />
      <input type="text" {...register('fullName', {required: true, minLength: 2, validate: {includesA: v => v.includes("A")}})}  /><br />
      {errors.fullName?.type == 'required' && <div className="hasError">Full Name is Required</div>}
      {errors.fullName?.type == 'minLength' && <div className="hasError">Full Name must have at least 2 characters</div>}
      {errors.fullName?.type == 'includesA' && <div className="hasError">Full Name must contain a capital A</div>}
      <br />
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
    
  </>)
}