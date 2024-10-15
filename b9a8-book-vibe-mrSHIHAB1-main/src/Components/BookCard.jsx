import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const BookCard = ({item}) => {
  const{id,bookName,author,image,tags,category,rating}=item;
    return (
        <Link to={`/Bookview/${id}`}>
            <div className="card w-full lg:w-[400px] bg-base-100 shadow-xl ">
  <figure><img className="p-8 rounded-lg h-[200px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     
      <div className="badge badge-secondary bg-green-100 text-green-500 border-none">{tags[0]}</div>
      <div className="badge badge-secondary  bg-green-100 text-green-500 border-none">{tags[1]}</div>
    </h2>
    <h1 className="text-2xl font-bold">{bookName}</h1>
    <p className="mb-5">By : {author}</p>
    <hr></hr>
    <div className="card-actions flex justify-between mt-5">
      <div className="">{category}</div> 
      <div className="flex items-center "> {rating}<CiStar /></div>
    </div>
  </div>
</div>
     </Link> 
    );
};

export default BookCard;