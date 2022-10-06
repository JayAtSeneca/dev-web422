import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Post() {
  const { data, error } = useSWR(
    "https://secondTest.ca/api/allProducts",
    fetcher
  );

  return (
    
      <ul>
        {data.map((product)=>
        {
           <li>{product?.name}  {product?.onSale?"IS ON SALE":"IS NOT ON SALE"} </li>
        })}
      </ul>
    
  );
}
