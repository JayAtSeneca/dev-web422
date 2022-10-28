import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function Product() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            productName: "",
            description: "",
        }
    });

    useEffect(() => {
        let data = {
            productName: "iPhone 14 Pro",
            description: "Latest iPhone Model",
        }

        for (const prop in data) {
            setValue(prop, data[prop]);
        }
    }, []);


    function submitForm(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            Product Name: <br />
            <input placeholder='Product Name' value="productName" className={errors.productName && "inputError"} {...register("productName", { required: true })} />
            {errors.productName?.type === "required" && <span className="inputErrorText"><br />Product Name is Required</span>}

            Description: <br />
            <textarea value="description" {...register("description")}></textarea><br /><br />

            <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
        </form>
    );
}