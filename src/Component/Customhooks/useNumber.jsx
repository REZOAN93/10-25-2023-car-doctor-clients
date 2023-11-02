import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useNumber = () => {
    const [number,setnumber]=useState(0)
    useEffect(()=>{
        axios.get(url,)
        .then(res=>setnumber(res.data))
    },[])
    return number
};

export default useNumber;