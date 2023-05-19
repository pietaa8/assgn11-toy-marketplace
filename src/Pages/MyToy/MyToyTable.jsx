

const MyToyTable = ({toy, handleDelete}) => {
    const {_id,name,sellerName,subcategory,price,quantity,rating,description,picture}=toy;
   
    return (
      <tr>
        <th>{sellerName}</th> 
        <td>{name}</td> 
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    <img src={picture} alt="" className="src" />
                </div>
            </div>
        </td>
        <td>{subcategory}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        <td>{rating}</td>
        <td>{description}</td>
        <td><button className="btn btn-primary">Update</button></td> 
        <td><button className="btn btn-primary" onClick={()=>handleDelete(_id)}>Delete</button></td>


      </tr>
      
       
    );
};

export default MyToyTable;