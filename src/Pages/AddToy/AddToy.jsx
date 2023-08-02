

const AddToy = () => {
    const handleAddToy=event=>{
        event.preventDefault();
        const form=event.target;
        const picture=form.picture.value;
        const name=form.name.value;
        const sellerName=form.sellerName.value;
        const email=form.email.value;
        const subcategory=form.subcategory.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const quantity=form.quantity.value;
        const description=form.description.value;

        const newToy={picture,name,sellerName,email,subcategory,price,rating,quantity,description}
        console.log(newToy);

        //sending data to the server
        fetch('https://assignment-eleven-server-blond.vercel.app/toy',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('Toy added successfully')
            }
        })
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold mb-5">Toy Form</h1>
            <form onSubmit={handleAddToy}>
                <div className="form-row">
                    <label className="form-label">Picture URL of the toy:</label>
                    <input type="text"  name="picture" placeholder="image" className="input input-bordered" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Name:</label>
                    <input type="text" placeholder="name" className="input input-bordered" name="name" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Seller Name:</label>
                    <input type="text" placeholder="Seller Name" className="input input-bordered" name="sellerName"/>
                </div>
                <div className="form-row">
                    <label className="form-label">Seller Email:</label>
                    <input type="email" placeholder="email" className="input input-bordered" name="email" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Sub-category:</label>
                    <select placeholder="sub-category" className="input input-bordered" name="subcategory" required>
                        <option value="Marvel">Marvel Toys</option>
                        <option value="Star Wars">Star Wars Toys</option>
                        <option value="Transformers">Transformers Toys</option>
                    </select>
                </div>
                <div className="form-row">
                    <label className="form-label">Price:</label>
                    <input type="number" placeholder="price" className="input input-bordered" name="price" step="0.01" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Rating:</label>
                    <input type="number" placeholder="rating" className="input input-bordered" name="rating" min="0" max="5" step="0.1" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Available quantity:</label>
                    <input type="number" placeholder="quantity" className="input input-bordered" name="quantity" min="0" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Detail Description:</label>
                    <textarea placeholder="description" className="input input-bordered" name="description" rows="5" required></textarea>
                </div>
                <div className="form-row justify-center">
          <input className="btn btn-primary" type="submit" value="Submit" />
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

export default AddToy;