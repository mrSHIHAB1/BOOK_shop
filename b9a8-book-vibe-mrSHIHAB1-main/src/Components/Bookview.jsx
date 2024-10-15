import { useParams } from 'react-router-dom';
import useBookdata from '../Hooks/useBookdata';
import { useState, useEffect } from 'react';
import {savetoLocalstorage,wishtoLocalstorage,checkifhas} from '../Utils/Localstoragebo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Bookview = () => {
  const notify = () => toast.success("Added to read !");
  const wnotify = () => toast.success("Added to Wishlist !");
  const wnotif = () => toast.error("Alreaady in Wishlist !");
  const notif = () => toast.error("Alreaady read !");
  const Worer = () => toast.error("It has been already read");
  
    const {id}=useParams();
    const[singleData,setsingdata]=useState({});
    
    const {data,loading}=useBookdata();
    const handledontat=()=>{
      const confirmation = savetoLocalstorage(singleData);
      if(confirmation){
        notify()
      }
      else{
        notif()
      }
  }
    useEffect(()=>{
        if(data){
        const singleData=data.find((item)=>item.id==id);
        
        setsingdata(singleData);
        }
    },[data,id]);
    
const handlwish=()=>{
  const a=checkifhas(singleData)
  if(a){
  const confirmation = wishtoLocalstorage(singleData);
  if(confirmation){
    wnotify()
  }
  else{
    wnotif()
  }
}
else{
  Worer()
}
}
    // Destructure properties from singleData
    const { bookName, author, image, tags, category, review,rating ,totalPages,publisher,yearOfPublishing} =singleData||{};
    

    
    return (
        
            <div className=" hero w-full  lg:w-[90vw] lg:h-[90vh] bg-white">
  <div className="hero-content flex-col lg:flex-row">
    <div className=' w-full lg:w-[50%] bg-slate-200 flex justify-center h-[90vh]'>
    <img src={image} />
    </div>
    <div className='w-[50%] space-y-5'>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <h1 className="text-xl font-semibold text-gray-600">By : {author}</h1>
      <hr></hr>
      <h1 className="text-xl  text-gray-600">{category}</h1>
      <hr></hr>
      <p className="py-6"><span className='font-extrabold '>Review: </span>{review}</p>
      <div className='flex space-x-5'>
      <p className='font-extrabold'>Tag</p>
      <div className="badge badge-secondary bg-green-100 text-green-500 border-none">Dystopian</div>
      <div className="badge badge-secondary  bg-green-100 text-green-500 border-none">Political</div>
    
      </div>
      <pre>
     <div className='font-bold'>
     <p>Number of pages   : {totalPages}</p>
      <p>Publisher         : {publisher} </p>
      <p>Year of publshing : {yearOfPublishing}</p>
      <p>rating            : {rating}</p>
     </div>
     </pre>
      <button onClick={handledontat} className="btn bg-white border-2 text-black mr-5">Read</button>
      <button onClick={handlwish} className="btn bg-blue-400 text-white">Wishlist</button>
    </div>
  </div>
  <ToastContainer />
</div>
        
    );
};

export default Bookview;