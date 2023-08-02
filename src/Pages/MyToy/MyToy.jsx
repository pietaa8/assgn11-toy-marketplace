import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `https://assignment-eleven-server-blond.vercel.app/toy?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete a toy?");
    if (proceed) {
      fetch(`http://localhost:5000/toy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-lg font-extrabold text-center mb-5 mt-5">My Toys</h3>
      <table className="table table-compact w-full mb-10">
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Picture</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Update Button</th>
            <th>Delete Button</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <MyToyTable
              key={toy._id}
              toy={toy}
              handleDelete={handleDelete}
            ></MyToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
