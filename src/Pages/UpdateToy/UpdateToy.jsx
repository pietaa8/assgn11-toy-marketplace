import { useParams } from "react-router-dom";


const UpdateToy = () => {
    const { id } = useParams();
    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
      
        const updatedToy = {
          price,
          quantity,
          description,
        };
      
       const proceed=window.confirm('Are you sure you want to update?');
       if(proceed){
        fetch(`https://assignment-eleven-server-blond.vercel.app/toy/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedToy),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                alert("Updated Successfully");
              }
            });
        }
       }
      


        

    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold">Toy Form</h1>
            <form onSubmit={handleUpdateToy}>
                <div className="form-row">
                    <label className="form-label">Price:</label>
                    <input type="number" id="price" name="price" step="0.01" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Available quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="0" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Detail Description:</label>
                    <textarea id="description" name="description" rows="5" required></textarea>

                </div>
                <div className="form-row justify-center">
          <input className="btn btn-primary" type="submit" value="update" />
        </div>
                                
            </form>
            <style>
                {
                    `
                    .form-row {
                        
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 10px;
                      }
                      .form-label {
                        width: 150px;
                      }
                      .justify-center {
                        justify-content: center;
                      }
                    `
                }
            </style>

        </div>
    );
};

export default UpdateToy;