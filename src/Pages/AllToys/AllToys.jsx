import { useLoaderData } from "react-router-dom";
import AddToyTable from "../AddToy/AddToyTable";
import { useState } from "react";


const AllToys = () => {

    const toys=useLoaderData();
    const [search,setSearch]=useState("");

    let filteredToys = [];

    if (Array.isArray(toys)) {
      filteredToys = toys.filter((toy) =>
        toy.name.toLowerCase().includes(search.toLowerCase())
      );
    }

  

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };


      
    return (
       <>
        <h1 className="text-center text-lg font-extrabold">All Toys</h1>
        <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by Toy Name"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
        {
           filteredToys.map(toy=> <AddToyTable
           key={toy._id}
           toy={toy}
           >

           </AddToyTable> )
        }
       </>
          
        
    );
};

export default AllToys;