import { useState } from "react";
import Banner from "./Banner";
import Books from "./Books";
import useBookdata from "../Hooks/useBookdata";
import Bookview from "./Bookview";

const Home = () => {
   
    const {data,loading}=useBookdata();
    
    
    return (
        <>
         
        <div className="lg:w-[1250px] p-3  lg:p-10 flex justify-center mx-auto ">
       
            <div >
                <Banner></Banner>
                <h1 className="text-center my-10 text-3xl font-bold">Books</h1>
            </div>
            
        </div>
        <Books data={data}></Books>
        </>
    );
};

export default Home;