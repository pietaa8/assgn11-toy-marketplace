

const AddToy = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold">Toy Form</h1>
            <form>
                <div className="form-row">
                    <label className="form-label">Picture URL of the toy:</label>
                    <input type="text" id="picture" name="picture" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Seller Name:</label>
                    <input type="text" id="seller-name" name="seller-name"/>
                </div>
                <div className="form-row">
                    <label className="form-label">Seller Email:</label>
                    <input type="email" id="seller-email" name="seller-email" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Sub-category:</label>
                    <select id="subcategory" name="subcategory" required>
                        <option value="math">Marvel Toys</option>
                        <option value="language">Star Wars Toys</option>
                        <option value="science">Transformers Toys</option>
                    </select>
                </div>
                <div className="form-row">
                    <label className="form-label">Price:</label>
                    <input type="number" id="price" name="price" step="0.01" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Rating:</label>
                    <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Available quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="0" required/>
                </div>
                <div className="form-row">
                    <label className="form-label">Detail Description:</label>
                    <textarea id="description" name="description" rows="5" required></textarea>
                </div>
                             < input type="submit" value="Submit" />
                                
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
                    `
                }
            </style>

        </div>
    );
};

export default AddToy;