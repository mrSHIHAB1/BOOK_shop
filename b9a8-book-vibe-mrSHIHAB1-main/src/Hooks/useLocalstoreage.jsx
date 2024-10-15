import React, { useEffect, useState } from 'react';
import { getfromlocalstorage } from '../Utils/Localstoragebo'
const useLoacalstorage = () => {
    const[localdata,setlocaldat]=useState([]);
    useEffect(()=>{
        setlocaldat(getfromlocalstorage());
    },[])

    return{localdata}; 
};


export default useLoacalstorage;