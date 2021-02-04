import axios from "axios";

const AddImage = ({ LoggedIn, SetLoggedIn }) => {
  const submitted = (e) => {
    e.preventDefault();
    console.log(LoggedIn);
    let image = new FormData();
    image.append("Name", e.target[0].value);
    image.append("Image", e.target[1].files[0]);
    image.append("UserId", LoggedIn.id);
    axios
      .post("/api/images", image)
      .then(() => {
        alert(`${e.target[0].value} : added`);
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="container w-50"
      encType="multipart/form-data"
      onSubmit={submitted}
    >
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
        <label className="form-label">Image</label>
        <input
          type="file"
          name="Image"
          className="form-control"
          id="Image"
        ></input>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default AddImage;
