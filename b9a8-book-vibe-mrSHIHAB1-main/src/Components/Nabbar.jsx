import { NavLink } from "react-router-dom";
const Nabbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 flex flex-col lg:flex-row">
  <div className=" lg:navbar-start justify-center ">
 
    <a className="btn btn-ghost text-2xl font-bold ">BookVibe</a>
  </div>
  <div className="lg:navbar-center  flex font-semibold ">
    <ul className="menu menu-horizontal px-1 flex flex-col lg:flex-row">
      <li><NavLink to='/'>Home</NavLink></li>
      <li>
        <NavLink to='/Listed'>Listed Books</NavLink>
      </li>
      <li><NavLink to='/PtRead'>Pages to read</NavLink></li>
      <li><NavLink to='/contact'>Contact Us</NavLink></li>
      <li><NavLink to='/Prem'>Premium</NavLink></li>
    </ul>
  </div>
  <div className=" navbar-end space-x-5 ">
    <a className="btn bg-blue-400 text-white">Sign In</a>
    <a className="btn bg-green-500 text-white">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Nabbar;