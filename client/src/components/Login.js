import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ LoggedIn, SetLoggedIn }) => {
  const submitted = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Pls Fill Out The Details");
      return 0;
    }

    let user = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    axios
      .post("api/users/signin", user)
      .then((res) => {
        SetLoggedIn({ id: res.data.id, name: res.data.name, value: res.data.auth });
      })
      .catch((err) => alert(err));
  };

  return (
    <form className="container w-50" onSubmit={submitted}>
      <h2 className="mb-4 text-center">Sign in</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="Name"
          name="Name"
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="Password"
          className="form-control"
          id="Password"
        ></input>
      </div>
      <button type="submit" className="btn btn-success mt-2">
        SignIn
      </button>
      <Link className="btn btn-primary ms-3 mt-2" to="/add" role="button">
        SignUp
      </Link>
    </form>
  );
};

export default Login;
