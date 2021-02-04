import axios from 'axios'
import { Link } from "react-router-dom";

const Register = () => {
const submitted = async (e) => {
  e.preventDefault();
  if(e.target[0].value === "" || e.target[1].value === "" || e.target[2].value ==="")
  {
    alert("Pls Fill Out The Details");
    return 0;
  }
  
  const user = {
    username: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value
  };
  const res = await axios.post("/api/users/signup" ,user);
  alert(`${res.data} : Added`);
  e.target.reset();
  window.location="/";
}

  return (
    <form className="container w-50" onSubmit={submitted}>
        <h2 className="mb-4 text-center">Sign up</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
        ></input>
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Signup
      </button>
      <Link className="btn btn-primary ms-3 mt-2" to="/" role="button">SignIn</Link>
    </form>
  );
};

export default Register;
