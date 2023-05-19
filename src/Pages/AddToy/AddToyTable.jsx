


const AddToyTable = ({toy}) => {

    const {name,sellerName,subcategory,price,quantity}=toy;


    return (
        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>Seller</th> 
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Button</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>{sellerName}</th> 
        <td>{name}</td> 
        <td>{subcategory}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        <td><button className="btn btn-primary">View Details</button></td> 

      </tr>
      </tbody>
       
  </table>
 
</div>
    );
};

export default AddToyTable;