import { useState, useEffect } from 'react';

function Debouce(value) {


    const [ debouceValue , setDebouceValue] = useState(value)


    useEffect(() => {
      const Timeout =  setTimeout(() => setDebouceValue(value) , 400);


       return () => clearTimeout(Timeout)
    },[value])

    return debouceValue;
}

export default Debouce;