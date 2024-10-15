import { useState } from "react";
import { getfromlocalstorage, getfromwish } from "../Utils/Localstoragebo";
import ReadBOoks from "./ReadBOoks";
import Whislistbook from "./Whislistbook";

const Listed = () => {
    const [readdata, setReadData] = useState(getfromlocalstorage());
    const [widataa, setWishData] = useState(getfromwish());
    const [sortOption, setSortOption] = useState("Sort by");
    const yearsort = () => {
        const sortedData = [...readdata];
        sortedData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setReadData(sortedData);
        const sortedDataa = [...widataa];
        sortedDataa.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setWishData(sortedDataa);
        setSortOption("Publish Year");
        
    };

    const ratingsort = () => {
        const sortedData = [...readdata];
        sortedData.sort((a, b) => b.rating - a.rating);
        setReadData(sortedData);
        const sortedDataa = [...widataa];
        sortedDataa.sort((a, b) => b.rating - a.rating);
        setWishData(sortedDataa);
        setSortOption("Rating");
    };

    const pagessort = () => {
        const sortedData = [...readdata];
        sortedData.sort((a, b) => b.totalPages - a.totalPages);
        setReadData(sortedData);
        const sortedDataa = [...widataa];
        sortedDataa.sort((a, b) => b.totalPages - a.totalPages);
        setWishData(sortedDataa);
        setSortOption("Pages Number");
    };
    return (
        <>
        <div className='bg-slate-200 h-32 flex justify-center items-center rounded-lg m-10'>
            <h1 className='text-4xl font-bold text-center my-10'>BOOKS</h1>
        </div>


      <div className="flex justify-center items-center">
      <div className="dropdown ">
  <div tabIndex={0} role="button" className="btn m-1 w-52 bg-green-500">{sortOption}</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <li><a onClick={ratingsort}>Rating</a></li>
 <li><a onClick={yearsort}>Publish Year</a></li>
 <li><a onClick={pagessort}>Pages Number</a></li>
  </ul>
</div>
      </div>

        <div role="tablist" className="tabs tabs-lifted lg:p-10">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
 {
    readdata.map((item)=>(
        <ReadBOoks key={item.id} item={item}></ReadBOoks>
    ))
 }
  
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Whishlist"  />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  {
    widataa.map((item)=>(
    <Whislistbook item={item} key={item.id}></Whislistbook>
  ))
  }
  
  </div>
  

</div>
</>
    );
};

export default Listed;