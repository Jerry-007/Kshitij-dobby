import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import AddImage from "./components/AddImage";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [LoggedIn, SetLoggedIn] = useState({ id:"", value: true, name: "" });
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getLoggedIn = async () => {
      let res = await axios.get("/api/users/check");
      SetLoggedIn({
        id: res.data.id,
        value: res.data.auth,
        name: res.data.name,
      });
    };
    getLoggedIn();
  },[]);
 
  useEffect(() => {
    const getImages = async () => {
      const res = await axios.get("api/images");
      setImages(res.data.filter((img) => img.UserId === LoggedIn.id));
    };
    getImages();
  }, [LoggedIn]);

  return LoggedIn.value ? (
    <Router>
      <Navbar LoggedIn={LoggedIn} SetLoggedIn={SetLoggedIn} images={images} setImages={setImages}/>
      <Route path="/" exact>
        <Mainpage images={images} setImages={setImages}/>
      </Route>
      <Route path="/add" exact>
        <AddImage LoggedIn={LoggedIn} SetLoggedIn={SetLoggedIn} />
      </Route>
    </Router>
  ) : (
    <Router>
      <Route path="/" exact>
        <Login LoggedIn={LoggedIn} SetLoggedIn={SetLoggedIn} />
      </Route>
      <Route path="/add" exact>
        <Register />
      </Route>
    </Router>
  );
}

export default App;
