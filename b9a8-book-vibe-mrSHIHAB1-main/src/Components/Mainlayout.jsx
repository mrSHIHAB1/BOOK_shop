import { Outlet } from "react-router-dom";
import Nabbar from "./Nabbar";
import BookCard from "./BookCard";


const Mainlayout = () => {
    return (
      <>
        <div className="container mx-auto">
        <div className="">
            <Nabbar></Nabbar>
     
        </div>
        <div className=" ">
            <Outlet></Outlet>
        </div>
        </div>
      </>
    );
};

export default Mainlayout;