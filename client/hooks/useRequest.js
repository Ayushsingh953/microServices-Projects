import {useState} from "react";
import axios from "axios";

export default ({url,method,body}) =>{
    const [errors,setErrors]=useState(null);

    const doRequest = async() =>{
        try{
            setErrors(null);
            const response = await axios[method](url,body);
            
            return response.data;
        }catch(err){
            console.log(err.response.data.errors);
            setErrors(
                <div className='alert alert-danger'>
                <h4>Errors</h4>
                <ul className='my-0'>
                    {err.response.data.errors.map(err =>(
                        <li key={err.message}>{err.message}</li>
                    ))}
                </ul>
            </div>
            )
        }
    }

    return {doRequest,errors};
}