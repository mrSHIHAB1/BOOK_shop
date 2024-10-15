import BookCard from "./BookCard";

const Books = ({ data }) => {
   

    return (
        <div className=' grid-cols-1 lg:grid-cols-3 gap-4 grid '>
            {
                data.map((item) => (
                    <BookCard key={item.id} item={item}></BookCard>
                ))
            }
        </div>
    );
};

export default Books;
