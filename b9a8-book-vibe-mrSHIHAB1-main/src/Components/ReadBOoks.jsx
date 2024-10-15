import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";
const ReadBOoks = ({item}) => {
    const { id,bookName, author, image, tags, category, review,rating ,totalPages,publisher,yearOfPublishing} =item||{};
    return (
        <div className="mb-5 ">
            <div className="lg:card flex flex-col  lg:card-side bg-base-100 shadow-xl">
  <figure className="flex justify-center"><img className="h-40" src={image} alt="Movie"/></figure>
  <div className="lg:card-body p-3 space-y-5">
    <h2 className="card-title">{bookName}</h2>
    <h1>By :{author}</h1>
    <div className='flex space-x-5 items-center '>
        <h1>Tag</h1>
        <div className="badge badge-secondary p-5 bg-green-100 text-green-500 border-none">{tags[0]}</div>
        <div className="badge badge-secondary p-5  bg-green-100 text-green-500 border-none">{tags[1]}</div>
        <CiLocationOn />
        <h1>Year of Publising:{yearOfPublishing}</h1>
    </div>
    <div className='flex   lg:justify-center items-center'>
    <IoPeopleOutline />
    <h1 className='mr-5'>Publisher :{publisher}</h1>
    <MdOutlineFindInPage />
    <p>page : {totalPages}</p>

    </div>
    <hr></hr>
    <div className="card-actions flex lg:space-x-4 lg:w-6/12  justify-between">
    <div className="badge badge-secondary  bg-blue-100 text-blue-500 border-none h-10">category: {category}</div>
    <div className="badge badge-secondary  bg-yellow-100 text-yellow-500 border-none h-10">Rating :{rating}</div>
    <Link to={`/Bookview/${id}`}>  <button className="bg-green-500 rounded-lg text-white p-2 ">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReadBOoks;