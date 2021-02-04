import { Link } from "react-router-dom";
import axios from "axios";

function Navbar({ LoggedIn, SetLoggedIn,images,setImages }) {
  const search = (event) => {
    event.preventDefault()
    let query = event.target[0].value;
    setImages(images.filter(img=> img.Name === query));
  }
  const Logout = () => {
    axios
      .get("api/users/signout")
      .then((res) => {
        SetLoggedIn({ id: "", name: "", value: res.data.auth });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            Dobby
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link ms-3 me-3">
                  {`SignedIn as ${LoggedIn.name}`}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" role="button" onClick={Logout} className="me-4 nav-link">
                  Sign Out
                </Link>
              </li>
            </ul>
            <form className="d-flex me-5" onSubmit={search}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
