import React from "react";

const Premium = () => {
  return (
    <>
    <div className="text-center mt-5 text-4xl font-bold text-green-500">Here is our premuim features</div>
    <div className="flex flex-col lg:flex-row  mt-10 justify-between p-10 gap-5">
    <div className="card w-96  bg-green-500 ">
  <div className="card-body text-white ">
    <h2 className="card-title">Unlimited Online Book Read</h2>
    <p>You can read books as more as you can read without any restirction</p>
    <div className="card-actions justify-end">
      <button className="btn bg-yellow-500 border-none">Buy Now</button>
    </div>
  </div>
</div>
  <div className="card w-96  bg-green-500 ">
  <div className="card-body text-white">
    <h2 className="card-title">Discount on Books Purchase</h2>
    <p>Get surprising discount for each book purchse</p>
    <div className="card-actions justify-end">
      <button className="btn  bg-yellow-500 border-none">Buy Now</button>
    </div>
  </div>
</div>  <div className="card w-96  bg-green-500 ">
  <div className="card-body text-white">
    <h2 className="card-title">Upload 1 book for free</h2>
    <p>If you want to publish any website we can publish that here</p>
    <div className="card-actions justify-end">
      <button className="btn  bg-yellow-500 border-none">Buy Now</button>
    </div>
  </div>
</div>
    </div>
    </>
  );
};

export default Premium
