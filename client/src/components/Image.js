const Image = ({ image }) => {
  return (
      <div className="card bg-dark image">
        <img src={image.Image.Url} className="card-img h-100" alt="..."></img>
      </div>
  );
};

export default Image;
