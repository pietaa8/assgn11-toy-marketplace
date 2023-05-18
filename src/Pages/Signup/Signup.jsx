import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const [error,setError]=useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }
  
      if (email.trim() === '' || password.trim() === '') {
        setError('Please fill in all fields');
        return;
      }


    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="image" src="" name="image" placeholder="image" alt="" />

            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Signup" />
            </div>
            <p className="my-4 text-center">
              Already have an account? <Link className="font-bold text-orange-500" to="/login">Log in</Link>{" "}
            </p>
            <p className="text-red-500">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
