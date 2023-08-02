import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ToyDetails = () => {
  const { toyId } = useParams();
  const toys = useLoaderData();
  const [toyDetail, setToyDetail] = useState({});

  useEffect(() => {
    if (toys && toys.length) {
      const toy = toys.find((toy) => toy._id === toyId);
      setToyDetail(toy);
    }
  }, [toys, toyId]);

  const { name, sellerName, subcategory, price, quantity, email, description, rating, picture } = toyDetail;

  return (
    <div className="card card-compact w-180 bg-base-100 shadow-xl grid grid-cols-2 gap-4 mb-5 mt-5 ml-20 ">
      <div className="card-image">
        <img src={picture} alt="Toy" />
      </div>
      <div className="card-details">
        <h2 className="card-title text-3xl text-red-500 font-bold">Toy: {name}</h2>
        <h2 className="text-xl">Seller Name: {sellerName}</h2>
        <h2 className="text-xl">Seller Email: {email}</h2>
        <p className="text-lg font-semibold">Subcategory: {subcategory}</p>
        <p className="text-lg">Price: ${price}</p>
        <p className="text-lg">Quantity: {quantity}</p>
        <p className="text-lg">Rating: {rating}</p>
        <p className="text-lg">Description: {description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
