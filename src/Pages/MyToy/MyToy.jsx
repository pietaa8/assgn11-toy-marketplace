import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";


const MyToy = () => {
     const {user}=useContext(AuthContext);
     const [toys,setToys]=useState([]);
     console.log('user:', user); // Check the value of 'user' object
  console.log('user.email:', user?.email);

     const url=`http://localhost:5000/toy?email=${user?.email}`
     useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setToys(data))
     },[])

    return (
        
        <div className="overflow-x-auto">
            <h3 className="text-lg font-extrabold text-center mb-5 mt-5">My Toys</h3>
  <table className="table table-compact w-full mb-10">
    <thead>
      <tr>
        <th>Seller</th> 
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Update Button</th>
        <th>Delete Button</th>

      </tr>
    </thead> 
    <tbody>
        {
           toys.map(toy=> <MyToyTable
           key={toy._id}
           toy={toy}></MyToyTable>)
        }
    </tbody>
       
  </table>
 
</div>
    );
};

export default MyToy;