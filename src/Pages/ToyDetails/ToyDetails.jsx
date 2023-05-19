import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ToyDetails = () => {
    const {toyId}=useParams();
    const toys=useLoaderData();
    const [toyDetail,setToyDetail]=useState({});
    useEffect(()=>{
        if(toys&&toys.length){
            const toy=toys.find(toy=>toy._id==toyId);
            setToyDetail(toy);
        }
    },[toys,toyId])

    const {name,sellerName,subcategory,price,quantity,email,description,rating,picture}=toyDetail;
    console.log(name);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl justify-center" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className="card-image" style={{ flexBasis: "40%" }}>
          <img src={picture} alt="Toy" />
        </div>
        <div className="card-details" style={{ flexBasis: "60%" }}>
          <h2 className="card-title">Toy Name:{name}</h2>
          <h2>Seller Name:{sellerName}</h2>
          <h2>Seller Email:{email}</h2>
          <p>Subcategory:{subcategory}</p>
          <p>Price:{price}</p>
          <p>Quantity:{quantity}</p>
          <p>Rating:{rating}</p>
          <p>Description:{description}</p>
        </div>
      </div>
    
    );
};

export default ToyDetails;