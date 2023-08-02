import { Link } from "react-router-dom";


const Notfound = () => {
    return (
        <div className="mt-5">
            <img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0JTIwZXJyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="src" />
            <p>Oops! The page you are looking for does not exist.</p>
     <button className="btn btn-primary"> <Link to="/">Back to Home</Link></button>
            
        </div>
    );
};

export default Notfound;