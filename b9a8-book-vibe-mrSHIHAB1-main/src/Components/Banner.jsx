import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="lg:hero lg:min-h-screen bg-slate-100 lg:w-full ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/3NCnts56/pngwing1.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="p-10">
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <NavLink to='/Listed'><button className=" mt-10 btn bg-green-500 text-white">View the List</button></NavLink>
      
    </div>
  </div>
</div>
    );
};

export default Banner;