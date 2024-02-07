const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }
  return (
    <img
      className={className}
      src={"http://127.0.0.1:4000/uploads/" + place.photos[index]}
      alt=""
    />
  );
};

export default PlaceImg;