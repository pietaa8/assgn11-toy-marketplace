import { Link } from 'react-router-dom';
import logo from '../../assets/image/378587.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img  src={logo} alt="" className="w-28 h-20" />
                <a className="btn btn-ghost normal-case text-xl">ToysStore</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><a>All Toys</a></li>
                    {user && (
            <>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a> <Link to='/addtoy'>Add A Toy</Link> </a>
              </li>
            </>
          )}
                </ul>
            </div>
            <div className="navbar-end">
            {user ? (
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost">
              {user.displayName}
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full ml-2"
              />
            </button>
            <button className="btn ml-2" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}

                
            </div>
        </div>
    );
};

export default Navbar;