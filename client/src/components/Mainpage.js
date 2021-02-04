import Image from "./Image";

const Mainpage = ({images,setImages }) => {


  let element;
  if (images.length > 0) {
    element = images.map((image) => <Image key={image._id} image={image} />);
  } else {
    element = (
      <div className="text-center w-100 mt-5 fs-3">Loading . . . .</div>
    );
  }
  return <div className="container d-flex flex-row flex-wrap">{element}</div>;
};

export default Mainpage;
