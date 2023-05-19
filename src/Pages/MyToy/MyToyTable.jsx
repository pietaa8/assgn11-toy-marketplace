

const MyToyTable = ({toy}) => {
    const {name,sellerName,subcategory,price,quantity}=toy;
    return (
      <tr>
        <th>{sellerName}</th> 
        <td>{name}</td> 
        <td>{subcategory}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        <td><button className="btn btn-primary">Update</button></td> 
        <td><button className="btn btn-primary">Delete</button></td>


      </tr>
      
       
    );
};

export default MyToyTable;