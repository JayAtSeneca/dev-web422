import { getToken } from "../lib/authenticate";

import useSWR from 'swr';

export default function Sales(){
    const { data, error } = useSWR([`http://webtest.com/api/sales`, { headers: { "Authorization": `JWT ${getToken()}` } }]);
    return (
        <ul>
            {data?.map((sale,index)=>(<li key={index}>{sale.productName}</li>))}
        </ul>
    )
}