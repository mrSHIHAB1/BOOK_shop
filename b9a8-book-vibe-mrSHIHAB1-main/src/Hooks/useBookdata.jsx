
import { useEffect } from 'react';
import { useState } from 'react';

const useBookdata = () => {
    const [data,setData]=useState([])
    const [loading,setloading]=useState(true);
    useEffect(()=>{
        const fetcdata=async()=>{
            const res=await fetch('/data.json')
            const data=await res.json()
            setData(data);
            
            setloading(false);
          }
      fetcdata();
      },[]);
          return {data,loading};
      };
      

export default useBookdata;